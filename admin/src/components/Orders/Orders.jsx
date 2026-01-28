import React, { useState, useEffect } from "react"
import "./Orders.css"
import Sidebar from "../Sidebar/Sidebar"; 
import axios from "axios"

const API_BASE = "http://localhost:4000";

const Orders = () => {

    const [orders,setOrders] = useState([]);
    const [genes, setGenes] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [geneFilter, setGeneFilter] = useState("all");
    const [statusFilter, setStatusFilter] = useState("all");
    const [keyword, setKeyword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchGenes = async () => {
        try {
            const res = await axios.get(`${API_BASE}/api/orders/genes`);
            if (res.data.success) {
                setGenes(res.data.data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const fetchOrders = async () => {
        try {
            setLoading(true);
            setError("");

            const params = new URLSearchParams();
            params.set("page", String(page));
            params.set("limit", String(limit));
            if (geneFilter !== "all") params.set("gene", geneFilter);
            if (statusFilter !== "all") params.set("status", statusFilter);
            if (keyword.trim()) params.set("q", keyword.trim());

            const res = await axios.get(`${API_BASE}/api/orders/list?${params.toString()}`);
            if (res.data.success){
                setOrders(res.data.data);
                setTotalPages(res.data.pagination.totalPages);
            }
            else {
                setError(res.data.message || "Could not fetch orders");
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message || "Request failed");
        } finally {
            setLoading(false);
        }
    };

    const statusHandler = async (event, orderId) => {
        const response = await axios.post(`${API_BASE}/api/orders/status`,{
            orderId,
            status:event.target.value
        })
        if (response.data.success) {
            await fetchOrders();
        }
    }

    useEffect(() => {
        fetchGenes();
    }, []);

    useEffect(() => {
        setPage(1);
    }, [geneFilter, statusFilter, keyword]);

    useEffect(()=>{
        fetchOrders();
    }, [page, geneFilter, statusFilter, keyword]);

    return (
        <div className="orders-layout">
            <Sidebar
                genes={genes}
                geneFilter={geneFilter}
                setGeneFilter={setGeneFilter}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                keyword={keyword}
                setKeyword={setKeyword}
                onClear={() => {
                    setGeneFilter("all");
                    setStatusFilter("all");
                    setKeyword("");
                }}
            />

            <main className="orders-main">
                <div className="order add">
                    <h2>Orders</h2>

                    {loading && <p>Loading...</p>}
                    {error && <p className="error">{error}</p>}

                    {!loading && !error && orders.length === 0 && <p>No orders yet.</p>}

                    {!loading && !error && orders.length > 0 && (
                        <div className="table-wrap">
                            <table className="orders-table">
                            <thead>
                                <tr>
                                    <th>TrackingID</th>
                                    <th>Assay</th>
                                    <th>Gene</th>
                                    <th>Variant</th>
                                    <th>Name</th>
                                    <th>Institution</th>
                                    <th>Contact</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                            {orders.map((o) => {
                                const created = o.createdAt || o.date;

                                return (
                                    <tr 
                                        key={o._id}
                                        className={o.status === "Completed" ? "order-completed" : ""}
                                    >
                                        <td className="trackid">{o.trackingId}</td>
                                        <td>{o.assay}</td>
                                        <td>{o.gene}</td>
                                        <td>{o.variant}</td>
                                        <td>{o.customer.fullName || "-"}</td>
                                        <td>{o.customer.institution || "-"}</td>
                                        <td className="contact-cell">
                                            <div className="contact-email">{o.customer?.email || "-"}</div>
                                            <div className="contact-phone">{o.customer?.phone || "-"}</div>
                                        </td>
                                        <td>{created ? new Date(created).toLocaleString() : "-"}</td>
                                        <td>
                                            <select 
                                                className="status-select"
                                                onChange={(event)=>statusHandler(event,o._id)} 
                                                value={o.status || "Order received"}
                                            >
                                                <option value="Order received">Order received</option>
                                                <option value="Preparing order">Preparing order</option>
                                                <option value="Sequencing">Sequencing</option>
                                                <option value="Analyzing results">Analyzing results</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                            </table>
                        </div>
                    )}
                    <div className="pagination">
                        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}> Prev </button>
                        <span>Page {page} / {totalPages}</span>
                        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}> Next </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Orders