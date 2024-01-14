import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import weather from './weather.png';
import bookapp from './bookapp.png';
import organicspices from './organicspices.png';
import formvalidation from './formvalidation.png';
import beauty from './beauty.png';
import furniture from './furniture.png';
import todolist from './todolist.png';
import './projects.css';
import { BsPersonWorkspace } from "react-icons/bs";

const Projects = () => {
  return (
    <div className='projectalign' id='latestwork'>
       <Container>
        <h3 className='py-5  text-center latestwork'>My latest works<BsPersonWorkspace style={{fontSize:"30px",marginLeft:"15px"}}/></h3>
        <Row>
         <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Card style={{ width: '18rem' ,marginBottom:'35px'}}>
              <Card.Img variant="top" src={weather} />
         <Card.Body>
         <Card.Title className='text-center'>Weather api</Card.Title>
         <div className='btnalign'>
         <Button  className='livebtn' ><a href='https://myweatherapp-api.netlify.app/' style={{textDecoration:"none"}}>Live site</a></Button>
         <Button  className='codebtn'><a href='https://github.com/Santhameena026/Weatherapp.git' style={{textDecoration:"none"}}>Github code</a></Button>      
         </div>
        </Card.Body>
         </Card>
         </Col>

         <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Card style={{ width: '18rem',marginBottom:'35px' }}>
                <Card.Img variant="top" src={bookapp} />
         <Card.Body>
         <Card.Title className='text-center'>Book api</Card.Title>
         <div className='btnalign'>
         <Button  className='livebtn'  ><a href='https://search-books-information-app.netlify.app/' style={{textDecoration:"none"}}>Live site</a></Button>
         <Button  className='codebtn'><a href='https://github.com/Santhameena026/bookapp.git' style={{textDecoration:"none"}}>Github code</a></Button>
         </div>
         </Card.Body>
         </Card>
         </Col>

         <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Card style={{ width: '18rem' ,marginBottom:'35px'}}>
                <Card.Img variant="top" src={formvalidation} />
         <Card.Body>
         <Card.Title className='text-center'>React form validation</Card.Title>
         <div className='btnalign'>
         <Button   className='livebtn' ><a href='https://elegant-kangaroo-de59c5.netlify.app/' style={{textDecoration:"none"}}>Live site</a></Button>
         <Button  className='codebtn'><a href='https://github.com/Santhameena026/formvalidation.git' style={{textDecoration:"none"}}>Github code</a></Button>
         </div>
         </Card.Body>
         </Card>
         </Col>

         <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
         <Card style={{ width: '18rem',marginBottom:'35px' }}>
                <Card.Img variant="top" src={organicspices} />
         <Card.Body>
         <Card.Title className='text-center'>Organic spices website</Card.Title>
         <div className='btnalign'>
         <Button  className='livebtn' ><a href='https://santhameena026.github.io/Organicspices/' style={{textDecoration:"none"}}>Live site</a></Button>
         <Button  className='codebtn' ><a href='https://github.com/Santhameena026/Organicspices.git' style={{textDecoration:"none"}}>Github code</a></Button>
         </div>
         </Card.Body>
         </Card>
         </Col>
        
         <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Card style={{ width: '18rem',marginBottom:'35px' }}>
                <Card.Img variant="top" src={beauty} />
         <Card.Body>
         <Card.Title className='text-center'>Beauty products website</Card.Title>
         <div className='btnalign'>
         <Button  className='livebtn'  ><a href='https://keen-lamington-cfe0dd.netlify.app/#signup' style={{textDecoration:"none"}}>Live site</a></Button>
         <Button className='codebtn' ><a href='https://github.com/Santhameena026/beautyproducts.git' style={{textDecoration:"none"}}>Github code</a></Button>
         </div>
         </Card.Body>
         </Card>
         </Col>
         
         <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Card style={{ width: '18rem' ,marginBottom:'35px' }}>
                <Card.Img variant="top" src={furniture} />
         <Card.Body>
         <Card.Title className='text-center'>Furniture shop website</Card.Title>
         <div className='btnalign'>
         <Button   className='livebtn' ><a href='https://cozy-quokka-51f904.netlify.app/about' style={{textDecoration:"none"}}>Live site</a></Button>
         <Button  className='codebtn' ><a href='https://github.com/Santhameena026/Landingpage.git' style={{textDecoration:"none"}}>Github code</a></Button>
         </div>
         </Card.Body>
         </Card>
         </Col>

         <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Card style={{ width: '18rem',marginBottom:'35px' }}>
                <Card.Img variant="top" src={todolist} />
         <Card.Body>
         <Card.Title className='text-center'>To do list</Card.Title>
         <div className='btnalign'>
         <Button  className='livebtn' ><a href='https://santhameena026.github.io/Jsform/' style={{textDecoration:"none"}}>Live site</a></Button>
         <Button className='codebtn' ><a href='https://github.com/Santhameena026/Jsform.git' style={{textDecoration:"none"}}>Github code</a></Button>
         </div>
         </Card.Body>
         </Card>
         </Col>

         

        </Row>
        </Container>
    </div>
  )
}

export default Projects