import express from "express"
import { placeOrder, listOrders, updateStatus, trackOrder, getGenes } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place",placeOrder);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);
orderRouter.get("/track/:trackingId", trackOrder);
orderRouter.get("/genes", getGenes);

export default orderRouter;