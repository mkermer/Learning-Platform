import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap";
import './Zoom.css';
const Zoom = () => {
  return (
    <div id="start-zoom">
      <Container>
        <Row>
          <Col>
      <hr/>
      <h4>You can start your Lecture  here</h4>
      <hr/>
      <h2>Click the button to join</h2>
      <Button
        as={Link}
        to="https://zoom.us/join"
        className="btn-primary"
        id="zoom-call"
      >
        Start your Call
      </Button>
      <hr/>
      </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Zoom;