import React from 'react'
import "./Publication.css";
import { assets } from '../../assets/assets'

const Publication = () => {
  return (
    <section id="publication" className='publi-section'>
        <div className="publication-left">
            <p>
                Our BRCA2 functional classification framework was published in the <i>Journal of Clinical Investigation</i>.
                <br />This study established a validated functional framework for distinguishing neutral and deleterious variants.
            </p>
            <h3>DISCLAIMER</h3>
            <p>Functional assay results provide experimental evidence to support variant interpretation and should 
                <br />be integrated with clinical, genetic, and familial information in accordance with ACMG guidelines. 
                <br /><b className='final-line'>Final variant classification remains the responsibility of the requester.</b>
            </p>
        </div>

        <div className="publication-right">
            <img src={assets.jci} alt="JCI article" />

            <a 
            href="https://www.jci.org/articles/view/181879"
            target="_blank"
            rel="noopener noreferrer"
            >
            jci.org
            </a>

            <p>Bose et al, 2025.</p>
        </div>
    </section>
  )
}

export default Publication
