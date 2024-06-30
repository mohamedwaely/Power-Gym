import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className='plans-container' id='Plans'>
                    {/*Plans header */ }
                    <div className='programs-header'>
                <span className='stroke-text'>ready to start </span>
                <span>your journey</span>
                <span className='stroke-text'>now withus</span>
            </div>
                    {/* Plans Card */}
                <div className='plans'>
                    {plansData.map((plan, i) => (
                     <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>
                        <div className='features'>
                            {plan.features.map((feature, i)=>(
                               <div className='feature'>
                                <img src={whiteTick} alt= "whiteTick"/>
                                <span key={i}>{feature}</span>
                               </div>
                            ))}
                        </div>
                        <div>
                            <span>see more benefits-</span>
                        </div>
                        <button className="btn">
                          <a href="https://rahmanareef2023.github.io/login/" rel="noopener noreferrer">Join Now</a>
                        </button>
                     </div>
                    ))}
               </div>
        </div>
  );
};

export default Plans;