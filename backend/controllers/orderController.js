import orderModel from "../models/orderModel.js"
import crypto from "crypto"

// placing order for frontend
const placeOrder = async (req,res) =>{
    try {
        const { assay, gene, variant, personal } = req.body;

        if (!assay || !gene || !variant || !personal) {
            return res.status(400).json({ success: false, message: "Missing fields" });
        }
        
        const trackingId = crypto.randomBytes(4).toString("hex").toUpperCase();

        const newOrder = new orderModel({
            trackingId,
            assay,
            gene,
            variant,
            customer: {
                firstName: personal.firstName,
                lastName: personal.lastName,
                email: personal.email,
                phone: personal.phone,
                city: personal.city,
                zipCode: personal.zipCode,
            },
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

// Listing orders for admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({}).sort({ createdAt: -1 });
        return res.status(200).json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Error" });
    }
};

export{placeOrder, listOrders};