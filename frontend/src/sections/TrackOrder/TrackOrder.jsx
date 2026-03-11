import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './TrackOrder.css'

const API_BASE = "http://localhost:4000";

const STEPS = [
  "Order received",
  "Functional Assay",
  "Sequencing",
  "Analyzing results",
  "Completed",
];

const normalizeStatus = (s) => (s || "").trim();

const TrackOrder = () => {
  const { trackingId } = useParams();
  const [status, setStatus] = useState("");
  const [createdAt, setCreatedAt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const currentIndex = useMemo(() => {
    const idx = STEPS.indexOf(normalizeStatus(status));
    return idx === -1 ? 0 : idx;
  }, [status]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get(`${API_BASE}/api/orders/track/${trackingId}`);
        if (!res.data.success) {
          setError(res.data.message || "Order not found");
          return;
        }

        setStatus(res.data.data.status || "Order received");
        setCreatedAt(res.data.data.createdAt || null);
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Order not found");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [trackingId]);

  if (loading) {
    return (
      <div className="track-page">
        <div className="track-card">
          <h2 className="track-title">Track your order</h2>
          <p className="track-muted">Loading…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="track-page">
        <div className="track-card">
          <h2 className="track-title">Track your order</h2>
          <p className="track-error">{error}</p>
          <p className="track-muted">
            Tracking ID: <span className="mono">{trackingId}</span>
          </p>
        </div>
      </div>
    );
  }

  const progressPct = (currentIndex / (STEPS.length - 1)) * 100;

  return (
    <div className="track-page">
      <div className="track-card">
        <div className="track-header">
          <div>
            <h2 className="track-title">Order status</h2>
            <div className="track-sub">
              Tracking ID: <span className="mono">{trackingId}</span>
              {createdAt && (
                <>
                  <span className="dot">•</span>
                  Created: {new Date(createdAt).toLocaleString()}
                </>
              )}
            </div>
          </div>

          <div className="status-badge">{STEPS[currentIndex]}</div>
        </div>

        {/* Stepper */}
        <div className="track-stepper">
          <div className="track-stepper-line">
            <div className="track-stepper-line-fill" style={{ width: `${progressPct}%` }} />
          </div>

          <div className="track-steps">
            {STEPS.map((label, i) => {
              const state =
                i < currentIndex ? "done" : i === currentIndex ? "active" : "todo";

              return (
                <div className={`track-step ${state}`} key={label}>
                  <div className="node">
                    {i < currentIndex ? "✓" : i + 1}
                  </div>
                  <div className="track-step-label">{label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="track-foot">
          <p className="track-muted">
            Tip: keep your Tracking ID to check progress anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;