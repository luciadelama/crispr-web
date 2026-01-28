import express from "express"
import { listOrders, placeOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place",placeOrder);
orderRouter.get("/list",listOrders);

export default orderRouter;