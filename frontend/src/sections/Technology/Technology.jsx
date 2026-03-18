import React from 'react'
import { useState } from 'react';
import "./Technology.css";
import { assets } from '../../assets/assets'

const Technology = () => {
  const [active, setActive] = useState("crispr");

  return (
    <section id="technology" className='tech-section'>
      <div className="tech-container">
        <h1>Our Technology</h1>

        <div className="tech-tabs" role="tablist" aria-label="Technology menu">
          <button
            className={`tech-tab ${active === "crispr" ? "active" : ""}`}
            onClick={() => setActive("crispr")}
            role="tab"
            aria-selected={active === "crispr"}
          >
            CRISPR-Select
          </button>

          <button
            className={`tech-tab ${active === "minigene" ? "active" : ""}`}
            onClick={() => setActive("minigene")}
            role="tab"
            aria-selected={active === "minigene"}
          >
            MiniGene
          </button>
        </div>

        {active === "crispr" ? <CrisprContent /> : <MinigeneContent />}
      </div>
    </section>
  )
}

const CrisprContent = () => (
  <div className="tech-layout">
    <div className="tech-left">
      <h2>Functional Variant Interpretation Using CRISPR-Select</h2>

      <div className="info-block">
        <p>
          Our platform employs CRISPR-Select, a precision genome editing platform 
          that enables direct functional assessment of genetic variants within 
          their endogenous genomic context.
        </p>
        <p>
          By introducing specific variants into human cells and measuring their 
          biological consequences, CRISPR-Select provides quantitative 
          functional evidence that supports variant classification framework.
        </p>
        <p>
          A schematic overview of the CRISPR-Select workflow is provided to 
          illustrate the editing, selection, and sequencing-based readout process.
        </p>
      </div>

      <div className="gene-container">
        <h3 className='gene-title'>Gene Coverage</h3>
        <div className="gene-grid">
          <div className="gene-panel">
            <p>Currently Available</p>
            <ul>
              <li>BRCA1</li>
              <li>BRCA2</li>
            </ul>
          </div>

          <div className="gene-panel">
            <p>Genes in Development</p>
            <ul>
              <li>ATM</li>
              <li>PTEN</li>
            </ul>
          </div>
        </div>
        <p className="future-note">
          Additional clinically relevant genes will be incorporated following validation.
        </p>  
      </div>
    </div>
    <div className="crispr-right">
      <img src={assets.crispr} alt="CRISPR" className="crispr-figure" />
    </div>
  </div>
)

const MinigeneContent = () => (
  <div className="tech-layout">
    <div className="tech-left">
      <h2>Splicing Variant Interpretation Using MiniGene Assays</h2>

      <div className="info-block">
        <p>
          MiniGene assays are used for evaluation of potential splice-altering variants.
        </p>
        <p>
          MiniGene assays enable experimental validation of:
        </p>
        <ul className="splicing-list">
          <li>Exon skipping</li>
          <li>Cryptic splice site activation</li>
          <li>Intron retention</li>
          <li>Alternative splicing events</li>
        </ul>
          
      </div>

      <div className="minigene-panel">
        <p>MiniGene assays can be designed for any gene of interest upon request. </p>
      </div>
    </div>
    <div className="minigene-right">
      <img src={assets.minigene} alt="MiniGene" className="minigene-figure" />
    </div>
  </div>
)

export default Technology;
