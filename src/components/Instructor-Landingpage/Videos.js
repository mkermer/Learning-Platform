import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Accordion, Card, Button, Collapse } from 'react-bootstrap';
import { Trash, ChevronBarUp } from 'react-bootstrap-icons';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { AccordionContext } from 'react-bootstrap';
import DisplayButton from '../SearchVideos/DisplayButton'
import DeleteVideo from './DeleteVideo';
import Video from './Video';


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

function Videos(props){
 

    const course = props.course;
    const videoNameArr = props.videoNameArr;

    return(
        <Accordion defaultActiveKey="0">
                        <Card>

                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <Row>
                                    <Col xs={10}>{course}</Col>
                                    <Col xs={2}>
                                        <ContextAwareToggle as={Button} variant="link" eventKey="0" />
                                    </Col>
                                </Row>
                            </Accordion.Toggle>
                            {videoNameArr.flat().filter(vid => course === vid.courseName).map(vid => {
                                // TEST
                                    
                                        return (
                                            <Accordion.Collapse eventKey="0">
                                                <Video vid={vid}/>
                                            </Accordion.Collapse>
                                        );
                                    
                                
                            })
                            }

                        </Card>
                        </Accordion>

    );
};

export default Videos