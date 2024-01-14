import React from 'react'
import './homepage.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Homepage = (props) => {
  return (
    <>
        <div className='frontpage' id='home'>
            <p className='hello'>{props.para}</p>
            <h1 className='name'>{props.name}</h1>
            <p className='developer'>{props.title}</p>
            <button className='resumebtn'><a href='https://drive.google.com/file/d/1oakQxAEuoTCLgaab7goZRQwO_KIbJ2De/view?usp=sharing'>Get Resume</a></button>
            <div  className="separatealign" >
            <button className='linkbtn' ><a href='https://github.com/Santhameena026'><FaGithub className='gitbtn' style={{color:"cyan",paddingBottom:"3px"}} /></a></button>
            <button className='linkbtn'><a href='https://www.linkedin.com/in/santhameena026/'><FaLinkedin className="gitbtn" style={{color:"cyan",paddingBottom:"3px"}}/></a></button>
            <button className='linkbtn'><a href='https://wa.me/qr/CLPG437ZJUE2H1'><FaWhatsapp className="gitbtn" style={{color:"cyan",paddingBottom:"3px"}} /></a></button>
            </div>
        </div>
        
    </>
  )
}

export default Homepage