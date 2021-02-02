import react from 'react';
import moment from 'moment';
import { Jumbotron, Container, Row, Col, Button, Card } from 'react-bootstrap';
import Slideshow from './Slideshow'
import './UserLandingpage.css';

function UserLandingpage(){
// const start = 
const date = moment().format("HH");
    const daytime = (date) => {
        if(date >= 5 && date <12){
            return ("Good Morning ");
        } else if(date >= 12 && date <17){
            return ("Welcome back ");
        } else if(date >= 17 || date <5){
            return ("Good evening ");
        };
    };

    return(
        <div className="UserLPage">
            <Jumbotron fluid>
                <h1>{daytime(date)} Username</h1>
            </Jumbotron>


            <Container className="carousel">
                <Row>
                        <Slideshow/>
                </Row>
            </Container>

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
                    <h2></h2>
                        <Card>
                            <Card.Img variant="top" src="https://cdn0.iconfinder.com/data/icons/different-characters/1200/Untitled-1-17-512.png" />
                            <Card.Body>
                                <Card.Title>Course Name starring Instructor Name</Card.Title>
                                <Card.Text>
                                Course Description
                                </Card.Text>
                                <Button variant="primary">Start your next meeting</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
};

export default UserLandingpage;