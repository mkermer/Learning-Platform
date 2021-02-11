
import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Accordion, Card, Button, Collapse } from 'react-bootstrap';
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
    const [open, setOpen] = useState(true);
    const [videoArr, setVideoArray] = useState([]);
    
    const [courseArr, setCourseArray] = useState([]);
    const [videoNameArr, setVideoNameArr] = useState();

    useEffect(async () => {

        setVideoArr();
        debug();
        console.log("SHOW: " + videoArr);
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
        console.log("SHOW ME: " + instructorArr)
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

        }, []);
        const videoArray = [];
        videoArray.push(videosByCourseName);
        console.log(videosByCourseName)

        
            // for (let key of videosByCourseName){
            //     console.log(key)
            // }
            var values = (Object.values(videosByCourseName))
            setVideoNameArr(values)
            values.map(videos => {
                console.log(videos)
                videos.map(vid => {
                    console.log(vid.videoName)
                })
            })

            
            const entries = (Object.entries(videosByCourseName))
            
            console.log(entries)
            const keys = (Object.keys(videosByCourseName))
            setCourseArray(keys)
            keys.map(course => {
                
                    
                        console.log(course)
                    
                })

            


        // for (let i in videosByCourseName) {
        //     if (videosByCourseName.hasOwnProperty(i)) {
        //         console.log(videosByCourseName[i])
        //         videoArray.push(videosByCourseName[i]);
        //     }
            // console.log("object" + i + "=" + videosByCourseName[i])
            // for (let j in videosByCourseName[i]) {
            //     console.log("object" + j + "=" + videosByCourseName[i][j])
            // }
        }


        console.log(videosByCourseName)

        // console.log(videoArray[0]);
        // const vidZERO = videoArray[0];
        // vidZERO.map(vid => {
        //     console.log(vid)
        // })
        // console.log(videosByCourseName)

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

        setCourseArray(videosByCourseName);

        // setCourseArray(videoArray);



    




    return (
        <div className="MyVideos">
        <div className="heading"><h2>My Videos</h2></div>
            <h1>My Videos</h1>

            <Accordion defaultActiveKey="0">
                {courseArr.map(course => {
                    return(
                        <Card>

                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <Row>
                            <Col xs={10}>{course}</Col>
                            <Col xs={2}>
                                <ContextAwareToggle as={Button} variant="link" eventKey="0" />
                            </Col>
                        </Row>
                    </Accordion.Toggle>
                        {videoNameArr.map(videos => {
                            videos.map(vid => {
                                if(course === vid.courseName){
                                    return(
                <Accordion.Collapse eventKey="0">
                        <Card.Body>
                           <Collapse in={open}>
                    <Row id="example-fade-text">
                                <Col xs={10}>
                                    {vid.courseName}
                                </Col>
                    
                    <Col xs={2}>
                        <Trash 
                            className="Trash"  
                            size={20}
                            onClick={() => setOpen(!open)}
                            aria-controls="example-fade-text"
                            aria-expanded={open}
                        />
                    </Col>
                </Row>
            </Collapse>
            
            </Card.Body>
            </Accordion.Collapse>
                                    )
                                }
                            })
                        })
                        }
                    
        </Card>
                    )
                })}
                
        </Accordion>

            <Button onClick={debug}>
                Debug
            </Button>
        </div>
    );
};

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(MyVideos);