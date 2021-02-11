import React from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


function Continue(props){
    return(    
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
                        <Card>
                            <Card.Img variant="top" src="https://cdn0.iconfinder.com/data/icons/different-characters/1200/Untitled-1-17-512.png" />
                            <Card.Body>
                                {/* <Card.Title>Course Name starring {props.applicationState.user.instructorName}</Card.Title> */}
                                <Card.Text>
                                Course Description
                                </Card.Text>
                                <Button variant="primary">Start your next meeting</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    )
}

export default Continue;