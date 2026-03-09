import React from 'react'
import "./Hero.css";
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: `url(${assets.hero})` }}
    >
      <div className='hero-content'>
        <h1>
          From <span className="blue">Variant Discovery</span>
          <br />
          to <span className="green">Clinical Action</span>
        </h1>
        <p className='hero-subtitle'>
          Functional interpretation of genetic variants
          <br />
          to accelerate precision treatment decisions.
        </p>

        <div className="hero-buttons">
          <a href="#technology" className="btn btn-primary">Explore our technology</a>
          <a href="#steps" className="btn btn-secondary">Submit variant</a>
        </div>
        <p className="hero-note">
          Pilot implementation funded by BETA.HEALTH.
        </p>
      </div>
    </section>
  )
}

export default Hero
