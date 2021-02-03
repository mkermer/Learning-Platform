import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

import UsefulLinks from './UsefulLinks';
import TermsOfService from './TermsOfService';
// import Contact from './Contact';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <hr />
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
              <li>Example Street 123</li>
              <li>Vienna,Austria</li>
               </ul>
               
                <h3>Social Media</h3>
                <a href="https:/www.youtube.com"
                className="Youtube Social"
                >
                <Youtube size={25}/>
                </a>
                <a href="https:/www.facebook.com"
                
                >
                <Facebook size={25}/>
                </a>
                <a href="https:/www.twitter.com"
                
                >
                <Twitter size={25}/>
                </a>
                <a href="https:/www.instagram.com"
                
                >
                <Instagram size={25}/>

                </a>
                
           
              
              
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
