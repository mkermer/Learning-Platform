// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { ReactComponent as Plattform } from '../../SVG/undraw_data_trends_b0wg.svg';
// import David from '../../SVG/a.svg';
// import Yuliya from '../../SVG/b.svg';
// import Morgane from '../../SVG/b.svg';


// import {
//   Card, CardBody, CardTitle, CardText, CardImg,
// } from 'react-bootstrap';
// import MissionJumbotron from './MissionJumbotron';
// import './Team.css';

// import Aos from 'aos';
// import 'aos/dist/aos.css';


// Aos.init({});


// function Team() {
//   return (
//     <div>
//       <Container>
//         <Row className="mt-20">
//           <Col
//             data-aos="fade-right"
//             data-aos-offset="500"
//             data-aos-duration="500"
//             lg={12} md={12}>
//             <h1>Team</h1>
//           </Col>
//         </Row>
//         <Row>
//           <Col
//             data-aos="fade-right"
//             data-aos-offset="500"
//             data-aos-duration="400" 
//             lg={6} md={12} sm={12}>
//             <Plattform />
//           </Col>
//           <Col 
//             data-aos="fade-left"
//             data-aos-offset="500"
//             data-aos-duration="400" 
//             lg={6} md={12}>
//             <h3>Our History</h3>
//             <p>
//               here will come a text
//             </p>
//           </Col>
//         </Row>
//       </Container>
//       <MissionJumbotron />
//       <Container className="TeamMembers">
//         <Row>
//           <Col
//             data-aos="fade-up"
//             data-aos-offset="200"
//             data-aos-duration="500"
//             md={12}>
//             <h4>Our Team</h4>
//           </Col>
//           <Col lg={3} md={6} sm={6}>
//             <Card 
//               data-aos="fade-up-right" id="TeamMembersCard">
//               <CardBody>
//                 <CardImg src={David} id="picTeam" alt="tree" />
//                 <CardTitle tag="h5">David</CardTitle>
//                 <CardText>Head of Backend</CardText>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col lg={3} md={6} sm={6}>
//             <Card data-aos="fade-up-right" id="TeamMembersCard">
//               <CardBody>
//                 <CardImg src={Yuliya} id="picTeam" alt="tree" />
//                 <CardTitle tag="h5">Yuliya</CardTitle>
//                 <CardText>Something</CardText>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col lg={3} md={6} sm={6}>
//             <Card data-aos="fade-up-left" id="TeamMembersCard">
//               <CardBody>
//                 <CardImg src={Morgane} id="picTeam" alt="tree" />
//                 <CardTitle tag="h5">Morgane</CardTitle>
//                 <CardText>Scrum Master</CardText>
//               </CardBody>
//             </Card>
//           </Col>
//                  </Row>
//       </Container>


//     </div>
//   );
// }

// export default Team;