import react from 'react';
import moment from 'moment';
import { Jumbotron, Container, Row } from 'react-bootstrap';
import Slideshow from './Slideshow';
import Continue from './Continue';
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

            <Continue/>

            
        </div>
    )
};

export default UserLandingpage;