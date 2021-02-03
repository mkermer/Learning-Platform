import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { withRouter } from "react-router";
import Side from "./Sidebar.js";
import './Sidebar.css'

function Dash(props) {

    return (
        <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Side />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        this is a test
                    </Col> 
                </Row>
  
            </Container>
        </>
        );
  };
//   const Dashboard = withRouter(Dash);
//   export default Dashboard;
export default Dash;