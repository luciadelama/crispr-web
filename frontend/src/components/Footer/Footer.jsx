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
                Email: <a href="mailto:your@email.com">your@email.com</a>
                </p>
                <p>
                Tel: <a href="tel:+4512345678">+45 12 34 56 78</a>
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

