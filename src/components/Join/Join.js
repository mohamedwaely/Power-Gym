import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Container ,Row ,Col } from "react-bootstrap";
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jd08xtk', 'template_5zps9fq', form.current, {
          publicKey: 'XPe0dnMKArkSsNzVa',
        })
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div className='join' id='join-us'>
      <Container>
        <Row> 
          <Col>
        <div className='left-j'>
            <div></div>
            <div>
            <span className='stroke-text'>ready to</span>
            <span>level up</span>
            </div>
            <div>
            <span>your body</span>
            <span className='stroke-text'>with us?</span>
            </div>
        </div>
        </Col>
        <Col> 
        <div className='right-j'>
            <form ref={form} className='email-container' onSubmit={sendEmail }>
                <input type='email' placeholder='enter your email address' name='user_email'/>
                <button className='btn btn-j'>join now</button>
            </form>
        </div>
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Join