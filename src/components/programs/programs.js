import React from 'react'
import './programs.css'
import {programsData} from'../../data/programsData';
import RightArrow from'../../assets/rightArrow.png'
function programs ()
{
    return (
        <div className='programs' id='programs'>
            {/* header */ }
            <div className='programs-header'>
                <span className='stroke-text'>explore our </span>
                <span>program</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className='program-categories'>
                {programsData.map((program)=>(
                    <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'>
                            <span><button className="btn" id="hy">
                                  <a href="https://rahmanareef2023.github.io/login/" rel="noopener noreferrer">Join Now</a>
                                </button></span>
                            <img src={RightArrow} alt='RightArrow'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default programs;

