import { useEffect, useState } from "react";
import './Information.css'

const API_BASE = "http://localhost:4000";

export default function FormService() {
  const [assay, setAssay] = useState("vus_class");
  const [gene, setGene] = useState("");
  const [variant, setVariant] = useState("");

  const [personal, setPersonal] = useState({
    fullName: "",
    institution: "",
    email: "",
    phone: "",
    city: "",
    zipCode: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] =useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setGene("");
  }, [assay]);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (assay === "vus_class" && !gene) {
      setError("Please select a gene.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        assay,
        gene,
        variant,
        personal,
      };

      const res = await fetch(`${API_BASE}/api/orders/place`, {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Order could not be placed.");
      }

      setTrackingId(data.trackingId);
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewOrder = () => {
    setIsSubmitted(false);
    setTrackingId("");
    setError("");
    setAssay("vus_class");
    setGene("");
    setVariant("");
    setPersonal({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      zipCode: "",
    });
  };

  if (isSubmitted) {
    return (
      <div className="home">
        <div className="form-container thank-container">
          <h2>Thanks for your order #{trackingId}</h2>
          <p>We have received your request and will contact you by email.</p>

          <div className="button-container">
            <button className="button" type="button" onClick={handleNewOrder}>
              Place another order
            </button>
          </div>

          <div className="form-foot">
            <p className="form-muted">
              Tip: keep your Tracking ID to check progress anytime.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="info" className="info-section">
      <div className="submit-title-wrapper">
        <h2 className="submit-title">Submit your variant here</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* ================= Variant Information (3 columns) ================= */}
          <h2>Variant Information</h2>

          {error && (
            <p style={{ marginTop: 8, color: "crimson" }}>
              {error}
            </p>
          )}

          <div className="form-row row--3">
            {/* Assay */}
            <div className="form-col">
              <div className="form-group">
                <label>Type of assay:</label>

                <div className="radio-group">
                  <label>
                    <input
                      required
                      type="radio"
                      name="assay"
                      value="vus_class"
                      checked={assay === "vus_class"}
                      onChange={(e) => setAssay(e.target.value)}
                      disabled={isSubmitting}
                    />
                    {" "}VUS classification
                  </label>

                  <label>
                    <input
                      required
                      type="radio"
                      name="assay"
                      value="minigene"
                      checked={assay === "minigene"}
                      onChange={(e) => setAssay(e.target.value)}
                      disabled={isSubmitting}
                    />
                    {" "}Minigene Assay
                  </label>
                </div>
              </div>
            </div>

            {/* Gene */}
            <div className="form-col gene-col">
              <div className="form-group">
                <label>Gene:</label>

                {assay === "vus_class" ? (
                  <select value={gene} onChange={(e) => setGene(e.target.value)} required disabled={isSubmitting}>
                    <option value="">--Select--</option>
                    <option value="BRCA1">BRCA1 (NM_007294.4)</option>
                    <option value="BRCA2">BRCA2 (NM_000059.4)</option>
                  </select>
                ) : (
                  <input
                    required
                    type="text"
                    value={gene}
                    onChange={(e) => setGene(e.target.value)}
                    placeholder="e.g. BRCA1 (NM_007294.4)"
                    disabled={isSubmitting}
                    tabIndex={1}
                  />
                )}
              </div>
            </div>

            {/* Variant */}
            <div className="form-col variant-col">
              <div className="form-group">
                <label>Variant:</label>
                <input
                  required
                  type="text"
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                  placeholder="e.g. c.1A>G (p.Met1Val)"
                  disabled={isSubmitting}
                  tabIndex={2}
                />
              </div>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Any additional comments?</label>
            <textarea
              name="comments"
              value={personal.comments}
              onChange={handlePersonalChange}
              tabIndex={3}
              disabled={isSubmitting}
            />
          </div>

          <br />

          {/* ================= Personal Details (2 columns) ================= */}
          <h2>Your Personal Details</h2>

          <div className="form-group full-width">
            <label>Full Name:</label>
            <input
              required
              name="fullName"
              value={personal.fullName}
              onChange={handlePersonalChange}
              tabIndex={4}
              disabled={isSubmitting}
            />
          </div>

          {/* Left column */}
          <div className="form-row row--2">
            <div className="form-col">
              <div className="form-group">
                <label>Institution:</label>
                <input
                  required
                  name="institution"
                  value={personal.institution}
                  onChange={handlePersonalChange}
                  tabIndex={4}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  required
                  name="email"
                  type="email"
                  value={personal.email}
                  onChange={handlePersonalChange}
                  tabIndex={5}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label>City:</label>
                <input
                  required
                  name="city"
                  value={personal.city}
                  onChange={handlePersonalChange}
                  tabIndex={7}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Right column */}
            <div className="form-col">
              <div className="form-group">
                <label>EAN Number:</label>
                <input
                  required
                  name="eannumber"
                  value={personal.eannumber}
                  onChange={handlePersonalChange}
                  tabIndex={4}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  value={personal.phone}
                  onChange={handlePersonalChange}
                  tabIndex={6}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label>ZIP Code:</label>
                <input
                  required
                  name="zipCode"
                  value={personal.zipCode}
                  onChange={handlePersonalChange}
                  tabIndex={8}
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </div>

          <br />
          <hr />
          <br />

          <div className="button-container">
            <button className="button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
