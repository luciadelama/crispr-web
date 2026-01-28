import mongoose from "mongoose";

const crisprSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String, required:true},

})

const crisprModel = mongoose.models.crispr || mongoose.model("crispr",crisprSchema);

export default crisprModel;