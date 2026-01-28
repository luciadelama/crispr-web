import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    trackingId:{type:String, required:true, unique:true},
    assay:{type:String, required:true},
    gene:{type:String, required:true},
    variant:{type:String, required:true},

    customer: {
        fullName:{type:String, required:true},
        institution:{type:String, required:true},
        email:{type:String, required:true},
        phone:{type:String, required:true},
        city:{type:String, required:true},
        zipCode:{type:String, required:true},
    },

    status:{type:String, default:"Order received"},
    }, 
    { timestamps: true }
);

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema);
export default orderModel;