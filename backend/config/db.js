import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://delamadridlucia_db_user:38669985@cluster0.xskqtp9.mongodb.net/crispr-web').then(()=>console.log("DB Connected"));
}