import React from 'react'
import Container from 'react-bootstrap/Container';
import './experience.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { FaComputer } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";


const Experience = () => {
  return (
    <div className='experience'>
        <Container>
        <Row>
          <Col>  
          <div className='mt-5 internship' id='experience'>
            <h3 className='mb-5  text-center ehead'>Experience<FaComputer style={{marginLeft:"15px"}} /></h3>
            <h5>Senchola Technology Solutions,Bangalore</h5>
            <p>Enthusiastic and dedicated Frontend Web Developer with a solid foundation gained during a 3-month internship at Senchola Technology Solutions 
                from September 10, 2023, to December 10, 2023.
            </p>
            <p>Proficient in HTML, CSS, JavaScript, Bootstrap, React.js, Git, and GitHub. During this internship, I successfully completed projects including a Weather App and Books App.
                My practical experience extends to diverse tasks such as form validation, developing a furniture shop website, and creating an Instagram clone.
                 These projects not only honed my technical skills but also fostered creativity and problem-solving.
            </p>
            <p>Excited to contribute my skills and passion to a collaborative web development team. Actively pursuing new opportunities 
                in the web development field to continue growing and learning.
            </p>  
           <div className='text-center'><button style={{marginBottom:"20px"}} className='certificatebtn mt-2'><a href='https://drive.google.com/file/d/1vmNies4pmG4oUs5AaXhIjmthFxOTSJDI/view?usp=drive_link' style={{textDecoration:"none"}}>Get Certificate</a></button></div>  
          </div>
          </Col>
          <Col>
          <div className='mt-5 tablealign'>
            <h3 className='mb-5  text-center ehead'>Education<FaUserGraduate  style={{fontSize:"30px",marginLeft:"15px"}}/></h3>
            <Table bordered className='mt-4 mb-4 tableheight w-75'>
              <thead>
                 <tr>
                    <th>Degree</th>  
                    <th>College/School</th>
                    <th>Period</th>
                    <th>Marks(%)</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                    <td>B.E(ECE)</td>
                    <td>Alagappa chettiar govt college of Eng and Tech</td>
                    <td>2015-2019</td>
                    <td>70%</td>
                 </tr>
                 <tr>
                   <td>HSC</td>
                   <td>Government Higher secondary School</td>
                   <td>2014-2015</td>
                   <td>91.5%</td>
                 </tr>
                 <tr>
                   <td>SSLC</td>
                   <td>Government Higher secondary School</td>
                   <td>2012-2013</td>
                   <td>94.6%</td>
                 </tr>
             </tbody>
          </Table>
          </div>
          </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Experience