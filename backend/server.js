import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import orderRouter from "./routes/orderRoute.js"
import loginRouter from "./routes/loginRoute.js"



// app config
const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(
    cors({ 
        origin: ["http://localhost:5173",  "http://localhost:5174"],
    })
)

// DB connection
connectDB();

// api endpoints
app.use("/api/orders",orderRouter)
app.use("/api", loginRouter)

app.get("/", (req,res)=>{       
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started in http://localhost:${port}`)
})