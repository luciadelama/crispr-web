import orderModel from "../models/orderModel.js"
import { sendOrderConfirmation, sendNewSubmissionNotification } from "../services/emailService.js";
import crypto from "crypto"

// placing order for frontend
const placeOrder = async (req,res) =>{
    try {
        const { assay, gene, variant, personal } = req.body || {};

        if (!assay || !gene || !variant || !personal) {
            return res.status(400).json({ success: false, message: "Missing fields" });
        }
        
        const trackingId = crypto.randomBytes(4).toString("hex").toUpperCase();

        const newOrder = new orderModel({
            trackingId,
            assay,
            gene,
            variant,
            status: "Submission received",
            comments: personal.comments || "",
            customer: {
                fullName: personal.fullName,
                institution: personal.institution,
                eannumber: personal.eannumber,
                email: personal.email,
                phone: personal.phone,
                city: personal.city,
                zipCode: personal.zipCode,
            },
        });

        await newOrder.save();

        // Confirmation email to the person who submitted the variant
        await sendOrderConfirmation(
            personal.email,
            personal.fullName,
            trackingId
        );

        // Notification email to the Variant to Treatment team
        await sendNewSubmissionNotification({
            trackingId,
            assay,
            gene,
            variant,
            personal,
        });

        return res.status(201).json({
            success: true,
            trackingId: newOrder.trackingId,
        });
    } catch (error) {
        console.error("placeOrder error:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const escapeRegex = (s = "") => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// api for listing orders for admin panel
const listOrders = async (req, res) => {
    try {
        const page = Math.max(parseInt(req.query.page || "1", 10), 1);
        const limit = Math.min(Math.max(parseInt(req.query.limit || "10", 10), 1), 100);
        const skip = (page - 1) * limit;

        const { gene, assay, status, q } = req.query;

        // Build query
        const filter = {};

        if (gene && gene !== "all") filter.gene = gene;
        if (assay && assay !== "all") filter.assay = assay;
        if (status && status !== "all") filter.status = status;

        if (q && q.trim()) {
            const safe = escapeRegex(q.trim());
            filter.$or = [
                { trackingId: { $regex: safe, $options: "i" } },
                { assay: { $regex: safe, $options: "i" } },
                { gene: { $regex: safe, $options: "i" } },
                { variant: { $regex: safe, $options: "i" } },
                { "customer.fullName": { $regex: safe, $options: "i" } },
                { "customer.institution": { $regex: safe, $options: "i" } },
                { "customer.eannumber": { $regex: safe, $options: "i" } },
                { "customer.email": { $regex: safe, $options: "i" } },
                { "customer.phone": { $regex: safe, $options: "i" } },
            ];
        }

        const [orders, total] = await Promise.all([
            orderModel.find(filter)
                .sort({ createdAt: -1 }) 
                .skip(skip)
                .limit(limit),
            orderModel.countDocuments(filter)
        ]);

        res.json({
            success: true,
            data: orders,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// api for getting unique genes (for filters)
const getGenes = async (req, res) => {
    try {
        const genes = await orderModel.distinct("gene");
        res.json({ success: true, data: genes.sort() });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const getAssays = async (req, res) => {
    try {
        const assays = await orderModel.distinct("assay");
        res.json({ success: true, data: assays.sort() });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// api for updating order status
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// api for tracking order status
const trackOrder = async (req, res) => {
  try {
    const { trackingId } = req.params;

    const order = await orderModel.findOne(
      { trackingId },
      { trackingId: 1, status: 1, createdAt: 1 } // devuelve lo mínimo
    );

    if (!order) return res.status(404).json({ success:false, message:"Not found" });

    return res.json({ success:true, data: order });
  } catch (e) {
    return res.status(500).json({ success:false, message:"Error" });
  }
};

export{placeOrder, listOrders, updateStatus, trackOrder, getGenes, getAssays};