import React, { useState, useEffect } from "react"
import "./Orders.css"
import axios from "axios"

const API_BASE = "http://localhost:4000";

const Orders = () => {

    const [orders,setOrders] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchAllOrders = async () => {
        try {
            setLoading(true);
            setError("");

            const res = await axios.get(`${API_BASE}/api/orders/list`);

            if (res.data.success){
                setOrders(res.data.data);
            }
            else {
                setError(res.data.message || "Could not fetch orders");
            }
        } catch (error) {
            setError(err.response?.data?.message || err.message || "Request failed");
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchAllOrders();
    },[]);

    return (
        <div className="order add">
            <h2>Orders</h2>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            {!loading && !error && orders.length === 0 && <p>No orders yet.</p>}

            {!loading && !error && orders.length > 0 && (
                <div className="orders-list">
                    {orders.map((o) => (
                        <div className="order-item" key={o._id}>
                            <div><b>Tracking:</b> {o.trackingId}</div>
                            <div><b>Assay:</b> {o.assay}</div>
                            <div><b>Gene:</b> {o.gene}</div>
                            <div><b>Variant:</b> {o.variant}</div>
                            <div><b>Status:</b> {o.status}</div>
                            <select>
                                <option value="Preparing order">Preparing order</option>
                                <option value="Sequencing">Sequencing</option>
                                <option value="Analyzing results">Analyzing results</option>
                            </select>
                            <div><b>Date:</b> {new Date(o.createdAt || o.date).toLocaleString()}</div>
                            {o.customer && (
                                <div className="order-customer">
                                    <div><b>Name:</b> {o.customer.firstName} {o.customer.lastName}</div>
                                    <div><b>Email:</b> {o.customer.email}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Orders