import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Accordion, Card, Button, Collapse } from 'react-bootstrap';
import { Trash, ChevronBarUp } from 'react-bootstrap-icons';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { AccordionContext } from 'react-bootstrap';
import DisplayButton from '../SearchVideos/DisplayButton'
import DeleteVideo from './DeleteVideo';


function Video(props) {

    const [open, setOpen] = useState(true);

    const vid = props.vid;

    return (

        <Card.Body>
            <Collapse in={open}>
                <Row id="collaps">
                    <Col xs={9}>
                        {vid.videoName}
                    </Col>

                    <Col xs={3}>
                        {/* <DisplayButton video={vid} /> */}
                        <Button
                            onClick={() => setOpen(!open)}>
                            <DeleteVideo vid={vid} />
                        </Button>
                    </Col>
                </Row>
            </Collapse>
        </Card.Body>

    );




};

export default Video