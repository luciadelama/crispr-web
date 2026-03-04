import React from 'react'
import "./Team.css";
import { assets } from '../../assets/assets'

const Team = () => {
  return (
    <section id="team" className='team-section'>
      <h1>Meet the Team</h1>
      <div className="people">
        <div className="person">
            <img src={assets.person} alt="Person" className='photo'/>
            <p className='name'>Enrique Gómez Castillo</p>
            <p className='position'>Research Assistant</p>
        </div>
        <div className="person">
            <img src={assets.person} alt="Person" className='photo'/>
            <p className='name'>Maria Rossing</p>
            <p className='position'>Chief Physician</p>
        </div>
        <div className="person">
            <img src={assets.person} alt="Person" className='photo'/>
            <p className='name'>Muthiah Bose</p>
            <p className='position'>Academic Researcher</p>
        </div>
        <div className="person">
            <img src={assets.person} alt="Person" className='photo'/>
            <p className='name'>Sofie Eriksen</p>
            <p className='position'>Research Technician</p>
        </div>
      </div>  
    </section>
  )
}

export default Team
