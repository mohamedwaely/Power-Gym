import { useState, useEffect } from 'react';
import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import Heart from '../../assets/heart.jpg';
import hero_image_back from '../../assets/hero_image_back.png';
import calories from '../../assets/calories.png';
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';

const Hero = () => {
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    fetchMemberCount();
  }, []);

  const fetchMemberCount = async () => {
    try {
      const response = await fetch('http://localhost/api/countmember.php');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMemberCount(data.member_count);
    } catch (error) {
      console.error('There was a problem fetching the member count:', error);
    }
  };

  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id='home'>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className='the-best-ad'>
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>shape</span>
            <span>Your</span>
          </div>
          <div><span>ideal body</span></div>
          <div className='text-help'>
            <span>
              here we will help you to shape
              and build your ideal body and live
              up your life to fullest.
            </span>
          </div>
        </div>
        {/* figures */}
        <div className='figures'>
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix="+"/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={memberCount} start={memberCount} delay='4' preFix="+"/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={10} delay='4' preFix="+"/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className='hero-buttons'>
          <button className='btn'>get started</button>
          <button className='btn'>learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn" id="hy">
          <a href="https://rahmanareef2023.github.io/login/" rel="noopener noreferrer">Join Now</a>
        </button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className='heart-rate'>
          <img src={Heart} alt="Heart"/>
          <span>heart rate</span>
          <span>116 bmp</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image_back} alt="hero_image-back" className='hero_image_back'/>
        {/* calories */}
        <motion.div
          initial={{ right: "44rem" }}
          whileInView={{ right: "34rem" }}
          transition={transition}
          className='calories'>
          <img src={calories} alt='calories'/>
          <div>
            <span>calories burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
