import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import htmlicon from './htmlicon.png';
import cssicon from './cssicon.png';
import javascripticon from './javascripticon.png';
import mongodbicon from './mongodbicon.png';
import bootstrapicon from './bootstrapicon.jpeg';
import Reacticon from './reacticon.png';
import './myskills.css';
import { GiSkills } from "react-icons/gi";



const Myskills = () => {
  return (
    <div className='myskillsalign' id="myskills">
    <h3 className='mt-5 mb-5 text-center  myskillhead'>My Skills<GiSkills style={{fontSize:"33px",marginLeft:"15px"}}/></h3>
     <Row>
      <Col  lg={4} md={4} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Card className="skillscard" style={{ width: '13rem', height:'13rem',display:"flex",justifyContent:"center",alignItems:"center" ,marginBottom:"25px"}}>
        <Card.Img variant="top" src={htmlicon} className='imageicon rounded-circle' />
      </Card >
      </Col>
      <Col lg={4} md={4} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Card className="skillscard" style={{ width: '13rem', height:'13rem',display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"25px"}}>
        <Card.Img variant="top" src={cssicon} className='imageicon rounded-circle'  />
      </Card>
      </Col>
      <Col lg={4} md={4} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Card className="skillscard" style={{ width: '13rem', height:'13rem',display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"25px" }}>
        <Card.Img variant="top" src={javascripticon} className='imageicon rounded-circle'  />
      </Card>
      </Col>
    </Row>
    <Row>
    <Col lg={4} md={4} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Card className="skillscard" style={{ width: '13rem', height:'13rem',display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"25px" }}>
        <Card.Img variant="top" src={bootstrapicon} className='imageicon rounded-circle'  />
      </Card>
      </Col>
      <Col lg={4} md={4} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Card className="skillscard" style={{ width: '13rem', height:'13rem',display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"25px"}}>
        <Card.Img variant="top" src={mongodbicon} className='imageicon rounded-circle'  />
      </Card>
      </Col>
      <Col lg={4} md={4} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Card className="skillscard" style={{ width: '13rem', height:'13rem',display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"25px" }}>
        <Card.Img variant="top" src={Reacticon} className='imageicon rounded-circle' />
      </Card>
      </Col>
    </Row>
  </div>
  )
}

export default Myskills