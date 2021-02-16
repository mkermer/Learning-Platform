import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config/config'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import Moment from 'react-moment';
import MusicPic from '../../img/music.png'
import TechPic from '../../img/tech.png'
import CodingPic from '../../img/coding.png'


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
            console.log(filteredMeetings)

        } else if (user.type === "instructor") {
            const filteredMeetings = meetings.filter(meeting =>
                meeting.instructor === user.instructorName)
            setMeetings(filteredMeetings);
        }
        



    }

    
    


    // 
    return (
        <>
            <h2>Booked Meetings</h2>
            
            <Row>
                
                    {meetings.map(meeting => {
                        const picture = () => {
                            if(meeting.category === "Music"){
                                return (MusicPic)
                            } else if(meeting.category === "Coding"){
                                return (CodingPic)
                            } else if(meeting.category === "Technologies"){
                                return (TechPic)
                            }
                        }

                        // const joinMeeting = () => {
                        //     return(
                        //         <div style={{height: '500px', width: '500px'}}>
                        //         <iframe src={`https://meet.jit.si/${meeting.course}`} style={{height: '100%', width: '100%'}}/>
                        //         </div>
                        //     )
                        // }

                        return (
                            <Col xs={12} lg={4}>
                            <Card className="content">
                                <Card.Img variant="top" src={picture()} />
                                <Card.Body>
                                    <Card.Title><strong>{meeting.course}</strong> <p>hosted by</p> <strong>{meeting.instructor}</strong> </Card.Title>
                                    <Card.Text> 
                                        at <strong>{meeting.timestamp}</strong>
                                    </Card.Text>
                                    <a href={`https://meet.jit.si/${meeting.course}`}><Button variant="primary">Start your meeting</Button></a>
                                    {/* <Button onclick={joinMeeting} variant="primary">Start your meeting</Button> */}
                                </Card.Body>
                            </Card>
                            </Col>
                        )
                    })}
                
            </Row>
        </>
    )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Continue)