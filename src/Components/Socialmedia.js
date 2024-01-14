import React from 'react'
import linkediniconimg from './linkediniconimg.png';
import whatsappimgicon from './whatsappimgicon.png';
import githubimg from './githubimg.png';
import netlifyimgicon from './netlifyimgicon.png';
import './socialmedia.css';
import { TfiWorld } from "react-icons/tfi";

const Socialmedia = () => {
  return (
    <div style={{backgroundColor:"black"}}>
        <p className='text-center pt-5' style={{fontSize:"30px",fontWeight:"700",color:"cyan"}}>Social Media <TfiWorld /></p>
        <p className='text-center text-white'>You can find and follow me</p>
        <div style={{display:"flex",justifyContent:"center",paddingBottom:"20px"}}>
            <a href='https://www.linkedin.com/in/santhameena026/'><img src={linkediniconimg} style={{width:"40px",height:"40px"}} alt='linkedin' className='mediaicon mt-2' /></a>
            <a href='https://github.com/Santhameena026'><img src={githubimg} style={{width:"50px",height:"50px"}} alt='github' className='mediaicon'/></a>
            <a href='https://wa.me/qr/CLPG437ZJUE2H1'><img src={whatsappimgicon} style={{width:"40px",height:"40px"}} alt='whatsapp' className='mediaicon mt-2'/></a>
            <a href='https://app.netlify.com/teams/santhameena026/overview'><img src={netlifyimgicon} style={{width:"40px",height:"40px"}} alt='netlify' className='mediaicon mt-2'/></a>
        </div>
        <div style={{backgroundColor:"grey"}} className='pt-3'>
         <p className='text-center text-white' style={{fontSize:"20px"}}>Made by <i>Santhameena Ponnazhagan</i></p>
         <p className='text-center pb-3 ' style={{color:"cyan",fontSize:"16px"}}>View code in Github</p>
        </div> 
    </div>
    
  )
}

export default Socialmedia