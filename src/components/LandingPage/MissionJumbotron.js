import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

import Aos from 'aos';
import 'aos/dist/aos.css';


Aos.init({});

function MissionJumbotron() {
    return (
      <Jumbotron fluid className="MissionGoal">
        <Container 
          data-aos="zoom-in-up" 
          data-aos-offset="200"
          data-aos-duration="500"
          id="MissionGoal-con">
          <Row>
            <Col>
              <h1>Our Mission</h1>
              <h3>
                SEcon Text
              </h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
}

export default MissionJumbotron;