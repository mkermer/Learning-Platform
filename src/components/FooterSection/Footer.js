import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import UsefulLinks from './UsefulLinks';
import TermsOfService from './TermsOfService';

import './Footer.css';
import { Link } from "react-router-dom";





function Footer() {
  return (
    <div className="main-footer">
     
      <Container className="Footer">
        <Row>
          <Col xs={12}   className="background-social">

      
                <a href="https:/www.youtube.com"
                
                >
                <Youtube className="YouTube"size={50} />
                </a>
                <a href="https:/www.facebook.com"
                
                >
                <Facebook className="Face"size={50}/>
                </a>
                <a href="https:/www.twitter.com"
                
                >
                <Twitter className="Twit" size={50}/>
                </a>
                <a href="https:/www.instagram.com"
                
                >
                <Instagram className="Insta" size={50}/>

                </a>
              
          </Col>
        </Row>
      </Container>
                <hr/>
      <Container className="Footer">
        <Row>
          <Col xs={12} sm={6} md={4}  className="background">
            <h4> TeachYourBest INC  </h4>
           <p> We are a newly created teaching platform aiming to make your quarantine more productive and fun !
               Here you will find endless opportunities to learn new things or you will be the one who teach to the 
               thousands !
               What are your waiting for ? </p>
               <h3>Join the Community</h3>
              
             
          </Col>
        
          <Col xs={12} sm={6} md={4}   className="background">
          <h4>Useful Links</h4>
            <ul>
              <li className="list-unstyled-link">
                <a href="#!">Fun</a>
              </li>
              <li className="list-unstyled-link">
                <a href="#!">DIY</a>
              </li>
              <li className="list-unstyled-link">
                <a href="#!">Something3</a>
              </li>
              <li className="list-unstyled-link">
                <a href="#!">Something4</a>
              </li>
              <li className="list-unstyled-link">
                <a href="#!">Something5</a>
              </li>
            </ul>
           
          
          </Col>
          <Col xs={12} sm={6} md={4}   className="background">
         
          <h4> Find Us</h4>
           
          <ul className ="list-unstyled">

           <li>Liechtensteinstraße 111/115</li>
           <li>1190,Vienna</li>
           <li> Austria</li>
          
        </ul>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.8721706102933!2d16.353713015399407!3d48.228335979230756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07c28ba6fad5%3A0x9277b1d2d683038e!2sTalent%20Garden%20Austria!5e0!3m2!1sde!2sat!4v1612439366816!5m2!1sde!2sat"></iframe>
            
           </Col>
        </Row>
      </Container>
      <hr />
      <Container className="FooterTwo">
        <Row>
          <Col  >
            <p>&copy; {new Date().getFullYear()} TeachYourBest INC  | All right reserved  |  <a href="https://www.mdbootstrap.com"> Terms of Service </a>| Privacy</p>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
