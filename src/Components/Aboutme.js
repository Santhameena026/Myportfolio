import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Photo from "./Photo.jpg";
import './aboutme.css';
import { IoMdContact } from "react-icons/io";

const Aboutme = () => {
  return (
    
       <div className='aboutme' id='aboutme'>
        <Container>
         <Row>
           <Col lg={4}>
             <div className='imagealign'><Image src={Photo} style={{height:"350px",width:"300px"}} rounded className='myimage'/></div>
           </Col>
           <Col lg={8}>
            <div className='contentalign'>
             <h3 className='mb-3  about'>About Me <IoMdContact /></h3>
             <p className='aboutpara'> I'm Santhameena from Tiruvallur district. I graduated from Alagappa
                 Chettiar Government College of Engineering and Technology in 2019. 
            </p>
             <p className='aboutpara'>After college, I spent the past four years studying for govt exams because I've always wanted to pursue a 
                challenging and interesting career. Numerous times, I was on the verge of being chosen, but it eluded 
                me until now.
            </p>
            <p className='aboutpara'>I am currently pursuing my passion for frontend development because of my enthusiasm, forward-thinking mindset, 
               and strong interest in web development.
            </p>  
            <p className='aboutpara'>I recently completed a 3-month internship at Senchola Technologies from September 2023 to December 2023, 
                where I acquired skills in HTML, CSS, JavaScript, Bootstrap, and ReactJS.</p>  
            </div>
           </Col>
         </Row>
         </Container>
      </div>
    
  )
}

export default Aboutme