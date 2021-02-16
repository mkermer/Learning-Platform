import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config/config'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';


function Continue(props) {
    const [meetings, setMeetings] = useState([]);

    const user = props.user;

    useEffect(async () => {
        await getMeetings();


    }, [])


    const getMeetings = async () => {
        const response = await axios.get(config.baseUrl + '/course');
        const meetings = response.data;
        if (user.type === "student") {
            const filteredMeetings = meetings.filter(meeting =>
                meeting.student === user.studentName)
            setMeetings(filteredMeetings);

        } else if (user.type === "instructor") {
            const filteredMeetings = meetings.filter(meeting =>
                meeting.instructor === user.instructorName)
            setMeetings(filteredMeetings);
        }




    }



    return (
        <Container>
            <h2>Continue</h2>
            <Row>
                <Col xs={12} lg={8}>
                    <iframe
                        className="video"
                        src="https://www.youtube.com/embed/hQAHSlTtcmY?controls=0"
                        alt="Video Name"
                    />
                </Col>
                <Col xs={12} lg={4}>
                    {meetings.map(meeting => {
                        return (
                            <Card>
                                <Card.Img variant="top" src="https://cdn0.iconfinder.com/data/icons/different-characters/1200/Untitled-1-17-512.png" />
                                <Card.Body>
                                    {/* <Card.Title>Course Name starring {props.applicationState.user.instructorName}</Card.Title> */}
                                    <Card.Text>
                                        {meeting.course}
                                    </Card.Text>
                                    <Button variant="primary">Start your next meeting</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}

                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Continue)