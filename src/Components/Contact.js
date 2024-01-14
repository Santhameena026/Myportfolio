import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contact.css';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fhg9e0a', 'template_2g147z1', form.current, 'FhhyCM-Z6ybJBC0Zl')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div className='contactbg' id='contact'>
      <Row className='justify-content-center align-items-center'>
        <Col md={4} sm={8} xs={8}>
            <form ref={form} onSubmit={sendEmail}>
              <h3 className='text-center pt-5 pb-4 contacthead'>Contact Me <IoCallOutline style={{fontSize:"35px"}} /></h3>
              <div className="mb-3 mt-3">
                  <label htmlFor="name" className="form-label">Enter Your Name:</label>
                  <input type="text" className="form-control" id="name"  name="user_name"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label"> Enter Your Email:</label>
                  <input type="email" className="form-control" id="email" name="user_email"/>
              </div>
              <div className="mb-3 mt-3">
                  <label htmlFor="msg">Enter Your Message:</label>
                  <textarea className="form-control mt-2" rows="5" id="msg" name="message"></textarea>
              </div>
                <div className='text-center mb-5'><button type="submit" className="btn sendbtn mt-3">Send</button></div>
           </form>
           <p className='text-center'><MdOutlineMail style={{marginRight:"3px",color:"cyan",fontSize:"20px"}}/>meenaponnazhagan@gmail.com</p>
           <p className='text-center' ><IoCallOutline style={{marginRight:"3px",color:"cyan",fontSize:"20px"}}/>8667692135</p>
        </Col>
      </Row>
    </div>
  )
}

export default Contact