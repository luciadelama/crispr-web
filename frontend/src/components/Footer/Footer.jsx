import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-top">
            <div className="footer-col footer-info">
                <h3>MDxCore Department</h3>
                <p>Rigshospitalet</p>
                <p>Copenhagen, Denmark</p>
            </div>

            <div className="footer-col footer-contact">
                <h3>Contact Us</h3>
                <p>
                <a href="mailto:variant2treatment.rigshospitalet@regionh.dk">variant2treatment.rigshospitalet@regionh.dk</a>
                </p>
                <p>
                <a href="tel:+4535458743">+45 35 45 87 43</a>
                </p>
            </div>

            <div className="footer-col footer-brand">
                <img
                src={assets.logo}
                alt="Variant to Treatment logo"
                className="footer-project-logo"
                />
            </div>
            </div>

            <div className="footer-bottom">
            <p className="footer-note">
                The service is currently being rolled out as a pilot model, funded by
                BETA.HEALTH under the project name: “Variant to Treatment”.
            </p>

            <div className="footer-funding">
                <img src={assets.betalogo} alt="Funding partner 1" className="funding-logo" />
                <img src={assets.regionlogo} alt="Funding partner 2" className="funding-logo" />
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

