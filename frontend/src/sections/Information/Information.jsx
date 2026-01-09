import { useEffect, useState } from "react";
import './Information.css'

export default function FormService() {
  const [assay, setAssay] = useState("vus_class");
  const [gene, setGene] = useState("");
  const [variant, setVariant] = useState("");

  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    zipCode: "",
  });

  useEffect(() => {
    setGene("");
  }, [assay]);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ assay, gene, variant, ...personal });
  };

  return (
    <div className="home">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* ================= Variant Information (3 columns) ================= */}
          <h2>Variant Information</h2>

          <div className="form-row row--3">
            {/* Assay */}
            <div className="form-col">
              <div className="form-group">
                <label>Type of assay:</label>

                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="assay"
                      value="vus_class"
                      checked={assay === "vus_class"}
                      onChange={(e) => setAssay(e.target.value)}
                    />
                    {" "}VUS classification
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="assay"
                      value="minigene"
                      checked={assay === "minigene"}
                      onChange={(e) => setAssay(e.target.value)}
                    />
                    {" "}Minigene Assay
                  </label>
                </div>
              </div>
            </div>

            {/* Gene */}
            <div className="form-col">
              <div className="form-group">
                <label>Gene:</label>

                {assay === "vus_class" ? (
                  <select value={gene} onChange={(e) => setGene(e.target.value)}>
                    <option value="">--Select--</option>
                    <option value="BRCA1">BRCA1</option>
                    <option value="BRCA2">BRCA2</option>
                    <option value="*">*</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={gene}
                    onChange={(e) => setGene(e.target.value)}
                    placeholder="e.g. BRCA1"
                  />
                )}
              </div>
            </div>

            {/* Variant */}
            <div className="form-col">
              <div className="form-group">
                <label>Variant:</label>
                <input
                  type="text"
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                  placeholder="e.g. F11C"
                />
              </div>
            </div>
          </div>

          <br />

          {/* ================= Personal Details (2 columns) ================= */}
          <h2>Your Personal Details</h2>

          <div className="form-row row--2">
            {/* Left column */}
            <div className="form-col">
              <div className="form-group">
                <label>First Name:</label>
                <input
                  name="firstName"
                  value={personal.firstName}
                  onChange={handlePersonalChange}
                  tabIndex={1}
                />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  name="email"
                  type="email"
                  value={personal.email}
                  onChange={handlePersonalChange}
                  tabIndex={3}
                />
              </div>

              <div className="form-group">
                <label>City:</label>
                <input
                  name="city"
                  value={personal.city}
                  onChange={handlePersonalChange}
                  tabIndex={5}
                />
              </div>
            </div>

            {/* Right column */}
            <div className="form-col">
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  name="lastName"
                  value={personal.lastName}
                  onChange={handlePersonalChange}
                  tabIndex={2}
                />
              </div>

              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  name="phone"
                  type="tel"
                  value={personal.phone}
                  onChange={handlePersonalChange}
                  tabIndex={4}
                />
              </div>

              <div className="form-group">
                <label>ZIP Code:</label>
                <input
                  name="zipCode"
                  value={personal.zipCode}
                  onChange={handlePersonalChange}
                  tabIndex={6}
                />
              </div>
            </div>
          </div>

          <br />
          <hr />
          <br />

          <div className="button-container">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
