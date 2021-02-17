import React, { useState, useEffect } from 'react';
import ShowRating from './ShowRating';
import MyVideos from './MyVideos';
import './InstructorLandingpage.css';
import moment from 'moment';
import { Button, Jumbotron, Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import ContinueInstr from './ContinueInstr';



function InstructorLandingpage(props) {
    
    const [time, setTime] = useState("");


    const date = moment().format("HH");
    const daytime = (date) => {
        if (date >= 5 && date < 12) {
            return ("Good Morning ");
        } else if (date >= 12 && date < 17) {
            return ("Welcome back ");
        } else if (date >= 17 || date < 5) {
            return ("Good evening ");
        };
    };




    return (

        <div className="Instr">
            <Jumbotron fluid>
                <h1>{daytime(date)} {props.applicationState.user.instructorName}</h1>
            </Jumbotron>

            <Container>
                <Row className="marg">
                    <Col className="marg">
                        <ShowRating />
                    </Col>
                    <Col className="marg">
                        <MyVideos />
                    </Col>
                </Row>
                <hr/>
                <Row className="marg">
                    <ContinueInstr />
                </Row>
                
            </Container>

            

            {/* <Form.Group controlId="formBasicUsername">
                <Form.Label>Set Time for meeting</Form.Label>
                <Form.Control value={time} onChange={(e) => setTime(e.target.value)} placeholder="14:00"
                    type="username" />
            </Form.Group>
            <Button >
                Update Time
            </Button> */}
            

        </div>
    )
}


const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(InstructorLandingpage);