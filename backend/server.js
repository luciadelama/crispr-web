import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import orderRouter from "./routes/orderRoute.js"


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

// DB connection
connectDB();

// api endpoints
app.use("/api/orders",orderRouter)

app.get("/", (req,res)=>{       
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started in http://localhost:${port}`)
})

