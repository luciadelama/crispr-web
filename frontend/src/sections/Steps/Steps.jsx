import React from 'react'
import "./Steps.css";

const Steps = () => {
    const steps = [
        "Submit Variant Information",
        "Assay Design",
        "Functional Assessment",
        "Track Progress",
        "Reporting"
    ]
  return (
    <section id="steps" className='steps-section'>
        <h1>How it works</h1>
        <div className="stepper">
            <div className="step">
                <div className="circle">1</div>
                <div className="step-content">
                    <h2>Submit Variant Information</h2>
                    <p>Complete the submission form with:</p>
                    <ul className="list">
                        <li>Gene name</li>
                        <li>MANE transcript reference</li>
                        <li>Codon-level variant details</li>
                        <li>Genome build hg38</li>
                        <li>Contact information</li>
                    </ul>
                    <p>Accurate transcript and codon information are essential for assay design.</p>
                    <p>No biological specimen is required.</p>
                </div>
            </div>
            <div className="step">
                <div className="circle">2</div>
                <div className="step-content">
                    <h2>Assay Design</h2>
                    <p>Our team designs the required reagents.</p>
                </div>
            </div>
            <div className="step">
                <div className="circle">3</div>
                <div className="step-content">
                    <h2>Functional Assessment</h2>
                    <p>Variants are experimentally evaluated in controlled cellular systems to determine functional impact.
                        <br /><b>Turnaround Time</b>
                    </p>
                    <ul className="list">
                        <li>Variant classification assay: 6–8 weeks</li>
                        <li>MiniGene assay: Approximately 3 months</li>
                    </ul>
                </div>
            </div>
            <div className="step">
                <div className="circle">4</div>
                <div className="step-content">
                    <h2>Track Progress</h2>
                    <p>Upon submission, a tracking ID is issued. Progress can be monitored via the “Track Your Order” function on the website.</p>
                </div>
            </div>
            <div className="step">
                <div className="circle">5</div>
                <div className="step-content">
                    <h2>Reporting</h2>
                    <p>A final report summarizing functional results will be send by email to requester and subsequently uploaded in ClinVar. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps