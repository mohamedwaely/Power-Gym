import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instgram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <hr/>
               <div className='footer'>
                <div className='social-links'>
                <img src={Github} alt='githubIcon'/>
                <img src={Instgram} alt='Instgram'/>
                <img src={LinkedIn} alt='LinkedIn'/>
               </div>
               <div className='logo-f'>
                  <h2 className='logo logo2'>power<span>-gym</span></h2>
               </div>
               </div>
         </div>
  )
}

export default Footer