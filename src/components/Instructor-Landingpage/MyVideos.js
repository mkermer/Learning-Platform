import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { Trash, ChevronBarUp } from 'react-bootstrap-icons';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { AccordionContext } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import DisplayButton from '../SearchVideos/DisplayButton'
import DeleteVideo from './DeleteVideo';

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);




    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <ChevronBarUp
            size={25}
            className={isCurrentEventKey ? "rotateUp" : "rotateDown"}
            onClick={decoratedOnClick}
        />
    );
}

function MyVideos(props) {

    const [videoArr, setVideoArray] = useState([]);
    const [courseArr, setCourseArray] = useState([]);

    useEffect(async () => {

        setVideoArr();
        debug();
        console.log(videoArr);
        console.log(courseArr)

    }, [])

    const setVideoArr = async () => {
        const response = await axios.get(config.baseUrl + '/video');
        console.log(response.data);
        const videos = response.data;
        const instructorArr = [];

        videos.map(video => {
            if (video.instructor === props.applicationState.user.instructorName) {
                instructorArr.push(video);
            }
        })
        setVideoArray(instructorArr);
        console.log(instructorArr)
    }

    const debug = async () => {
        const arr = [];
        const videosByCourseName = videoArr.reduce((acc, value) => {

            if (!acc[value.courseName]) {
                acc[value.courseName] = [];
            }

            // Grouping
            acc[value.courseName].push(value);
            // arr.push(acc)
            // console.log(acc)
            return acc;

        }, {});
        const videoArray = [];
        videoArray.push(videosByCourseName);

        for (let i in videosByCourseName) {
            if (videosByCourseName.hasOwnProperty(i)) {
                console.log(videosByCourseName[i])
                videoArray.push(videosByCourseName[i]);
            }
            // console.log("object" + i + "=" + videosByCourseName[i])
            // for (let j in videosByCourseName[i]) {
            //     console.log("object" + j + "=" + videosByCourseName[i][j])
            // }
        }
        console.log(videoArray[0]);
        const vidZERO = videoArray[0];
        vidZERO.map(vid => {
            console.log(vid)
        })
        console.log(videosByCourseName)

        // const Array = [
        //     [0] React = [
        //         {},
        //         {},
        //         {}
        //     ],
        //     [1] Framework = [
        //         {}
        //     ]
        // ]
        // for (let i = -1; i <= videosByCourseName.length; i++) {

        //     for (let j = 0; j <= videosByCourseName[i].length; j++) {
        //         console.log(videosByCourseName[i][j]);
        //     }
        // }

        // videosByCourseName.map(course => {
        //     course.map(cour => {
        //         console.log(cour)
        //     })
        // })
        setCourseArray(videoArray);


    }



    return (

        <div className="MyVideos">
            <h1>My Videos</h1>

            <Accordion>
                <Card>

                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <Row>
                            <Col xs={10}>CourseName</Col>
                            <Col xs={2}>
                                <ContextAwareToggle as={Button} variant="link" eventKey="0" />
                            </Col>
                        </Row>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <Col xs={10}>
                                    VideoName
                    </Col>
                                <Col xs={2}>
                                    <Trash className="Trash" size={20} />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={10}>
                                    VideoName
                    </Col>
                                <Col xs={2}>
                                    <Trash className="Trash" size={20} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Accordion defaultActiveKey="0">
                <Card>

                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <Row>
                            <Col xs={10}>CourseName</Col>
                            <Col xs={2}>
                                <ContextAwareToggle as={Button} variant="link" eventKey="0" />
                            </Col>
                        </Row>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <Col xs={10}>
                                    VideoName
                    </Col>
                                <Col xs={2}>
                                    <Trash className="Trash" size={20} />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={10}>
                                    VideoName
                    </Col>
                                <Col xs={2}>
                                    <Trash className="Trash" size={20} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Button onClick={debug}>
                Debug
            </Button>
        </div>
    );
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(MyVideos);