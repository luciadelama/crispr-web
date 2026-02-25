import React from 'react'
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className='aboutus-section'>
      <div className="about-us">
        <h1>About Us</h1>
        <p>
            We provide functional classification of genetic variants using CRISPR-based precision genome editing (CRISPR-Select) and MiniGene splice assays. 
            The service is a part of the MDxCore unit at the Department of Clinical Biochemistry, Rigshospitalet, Copenhagen University Hospital. 
            <br />
            <br />Our platform provides experimental evidence to support clinical variant interpretation 
            and is currently available as a pilot initiative funded by BETA.HEALTH entitled “Variant to Treatment.”
        </p>
      </div>
    </section>
  )
}

export default AboutUs
