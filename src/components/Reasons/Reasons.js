import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"
const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className='left-r'>
            <img src={image1} alt='dynamique man'/>
            <img src={image2} alt='dynamique man'/>
            <img src={image3} alt='dynamique man'/>
            <img src={image4} alt='dynamique man'/>
        </div>
        <div className='right-r'>
             <span>some reasons</span>

             <div>
                <span className="stroke-text">why</span>
                <span> choose us?</span>
             </div>

             <div className='details-r'> 
             <div>
                <img src={tick} alt="logo"/>
                <span>over 140+ expert coachs</span>
            </div>
            <div>
            <img src={tick} alt="logo"/>
                <span>train smarter and faster than before</span>
            </div>
            <div>
            <img src={tick} alt="logo"/>
                <span>1 free program for new member</span>
            </div>
            <div>
            <img src={tick} alt="logo"/>
                <span>reliable partiners</span>
            </div>
         </div>

         <span>our partiners</span>

         <div className='partners'>
         <img src={nb} alt="new balance"/>
         <img src={adidas} alt="adidas"/>
         <img src={nike} alt="nike"/>
      </div>
   </div>
</div>
  )
}

export default Reasons;