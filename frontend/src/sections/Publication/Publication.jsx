import React from 'react'
import "./Publication.css";
import { assets } from '../../assets/assets'

const Publication = () => {
  return (
    <section id="publication" className='publi-section'>
        <div className="publi-container">
            <div className="publication-left">
                <h3>DISCLAIMER</h3>
                <p>Functional assay results provide experimental evidence to support variant interpretation and should 
                    <br />be integrated with clinical, genetic, and familial information in accordance with ACMG guidelines. 
                    <br /><b className='final-line'>Final variant classification remains the responsibility of the requester.</b>
                </p>
            </div>
        </div>
        
    </section>
  )
}

export default Publication
