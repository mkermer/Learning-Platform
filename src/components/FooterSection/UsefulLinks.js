import Row from 'react-bootstrap/Row';
import React from 'react';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

function UsefulLinks() {
  return (
    <>
      <h5>Useful Links</h5>
      <br />

      <Row>
        <Col md={6} className="links">
          <p>
            <Link to="/">
              
            </Link>
          </p>
          <p>
            <Link to="/">
              
            </Link>
          </p>
          <p>
            <Link to="/"></Link>
          </p>
        </Col>

        <Col md={6} className="links">
          <p>
            <Link to="/"></Link>
          </p>
          <p>
            <Link to="/"></Link>
          </p>
          <p>
            <Link to="/"></Link>
          </p>
        </Col>
      </Row>
    </>
  );
}

export default UsefulLinks;
