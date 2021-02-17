import React, { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../../config/config'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Player } from 'video-react';
import { Col, Container, Form, Row, Jumbotron, Card, Alert } from 'react-bootstrap';
import './SearchVideos.css';
import ReactStars from 'react-rating-stars-component';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import { Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Envelope } from 'react-bootstrap-icons';




const DisplayVideo = (props) => {
    const [variant, setVariant] = useState('warning');
    const [show, setShow] = useState(false);


    const [rate, setRating] = useState(null);
    const [text, setText] = useState("");
    const image = props.applicationState.user.image;
    const student = props.applicationState.user.studentName;
    // video schema
    const instructor = props.applicationState.video.instructor;
    const courseName = props.applicationState.video.courseName;
    const url = props.applicationState.video.url;
    const category = props.applicationState.video.category;
    const description = props.applicationState.video.description;
    const videoTimestamp = props.applicationState.video.timestamp;
    const videoName = props.applicationState.video.videoName;
    const timestamp = Date.now();


    const [reviewArr, setReviewArr] = useState([]);
    const [avgRat, setAvgRat] = useState();


    useEffect(async () => {
        await getReviews();


    }, [setAvgRat, setReviewArr])


    const ratingReview = (rating) => {
        setRating(rating);
    }


    const averageRating = (arr, setAvgRat) => {
        let sum = 0;
        arr.map(review => {

            sum += review.rating;
        })
        console.log(sum);
        let average = sum / arr.length;
        console.log(average)
        const flooreAvg = Math.floor(average)

        setAvgRat(flooreAvg);
        return flooreAvg
    }


    const getReviews = async () => {
        const response = await axios.get(config.baseUrl + '/review');
        console.log(response.data);
        const reviews = response.data;
        const instructorArr = [];

        reviews.map(review => {
            if (review.instructor === props.applicationState.video.instructor) {
                instructorArr.push(review);

            }
        })
        const reverseReviewArray = instructorArr.map(item => item).reverse()
        setReviewArr(reverseReviewArray);

        averageRating(instructorArr, setAvgRat);
    }


    const addNewReview = async (newReview) => {
        try {
            const response = await axios.post(config.baseUrl +
                `/review/add`, newReview);
            console.log(response.data);
        } catch (err) {
            console.log(err)
        }
    }


    const studentReview = () => {
        const newReview = {
            instructor: instructor,
            student: student,
            courseName: courseName,
            text: text,
            rating: rate,
            image: image,
            timestamp: timestamp
        }

        addNewReview(newReview);
    }


    const instructorReview = () => {
        const newReview = {
            instructor: instructor,
            student: props.applicationState.user.instructorName,
            courseName: courseName,
            text: text,
            rating: rate,
            image: image,
            timestamp: timestamp
        }

        addNewReview(newReview);
    }


    const newReview = async () => {
        if (props.applicationState.user.type === "student") {
            studentReview();

        } else if (props.applicationState.user.type === "instructor") {
            instructorReview()
        }

    }


    const updateAvgRat = async () => {
        const updatedVideo = {
            instructor: instructor,
            courseName: courseName,
            url: url,
            category: category,
            description: description,
            timestamp: videoTimestamp,
            videoName: videoName,
            avgRat: avgRat
        }

        try {
            const response = await axios.post(config.baseUrl +
                `/video/update/${props.applicationState.video._id}`, updatedVideo);
            console.log(response.data);
            props.actions.storeVideoData(response.data);

        } catch (err) {
            console.log(err)
        }
    }


    const post = async () => {
        newReview();
        updateAvgRat();
        window.location.reload()
    }


    const scheduleMeeting = async () => {
        const newMeeting = {
            instructor: instructor,
            student: student,
            course: courseName,
            category: category,
            timestamp: "/",
            day: "/"
        }
        try {
            const response = await axios.post(config.baseUrl + '/course/add', newMeeting);
            console.log(response.data)
            setShow(true)
        } catch (err) {
            console.log(err);
        }


    }


    return (
        <div className="displayVideo">
            <link
                rel="stylesheet"
                href="https://video-react.github.io/assets/video-react.css"
            />

            <Jumbotron fluid>
                <h1>Video Player</h1>
            </Jumbotron>
            <Container>
                <Row>
                    <Col >
                    <Card>
                        <Player>
                            <source src={props.applicationState.video.url} />
                        </Player>
                        <Card.Body>
                            <Card.Title>
                                <h2><strong>{props.applicationState.video.videoName}</strong> by <strong>{props.applicationState.video.instructor}</strong></h2>
                                <Alert variant='success' show={show}>
                                    Successfully booked a meeting!
                                </Alert>
                                <Button onClick={scheduleMeeting}>
                                    Book meeting
                                </Button>
                            </Card.Title>
                            <hr/>
                                <h2>Overall Rating</h2>
                                    <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 0 ? 'blue' : ''} />
                                    <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 1 ? 'blue' : ''} />
                                    <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 2 ? 'blue' : ''} />
                                    <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 3 ? 'blue' : ''} />
                                    <FontAwesomeIcon icon={faStar} className={props.applicationState.video.avgRat > 4 ? 'blue' : ''} />
                        </Card.Body>
                    </Card>
                        
                    </Col>
                </Row>
                
                <Row >
                    <Col>
                    
                    <Form className="form-elem">
                        <div className="reviewHeader" >
                            <h2>Your Review <FontAwesomeIcon style={{color:"gold", fontSize: "30px"}} icon={faStar}/></h2>
                        </div>
                        <div className="form-content">
      
                    <Form.Group controlId="formBasicUsername">
                        <div className="stars">
                            <ReactStars activeColor="gold" size={50} count={5} isHalf={false} onChange={ratingReview} />
                        </div>
                        <br/>
                        <Form.Control
                            type="text" value={text} placeholder="Write your Review here! Always remember to be friendly and do not use bad words." as="textarea" rows={8} onChange={(e) => setText(e.target.value)} />
                    </Form.Group>
                    <Button className="btn" variant="primary" onClick={post} >
                        Post <Envelope size={20}/>
                    </Button>
                    </div>
                    </Form>
                    </Col>
                    
                    <Col>
                    
                    <div className="ShowRating">
                        <div className="heading"><h2> Latest Reviews</h2></div>
                        {reviewArr.map(review => {
                            return (
                                <Toast key={review._id}>
                                    <Toast.Header>
                                        <img src={review.image} className="rounded mr-2" alt="" />
                                        <strong className="mr-auto">{review.student}</strong>
                                        <ReactStars activeColor="blue" edit={false} size={20} count={5} isHalf={true} value={review.rating} />
                                        <small><Moment fromNow>{review.timestamp}</Moment></small>
                                    </Toast.Header>
                                    <Toast.Body>{review.text}</Toast.Body>
                                </Toast>
                            )
                        })}
                    </div>
                
                    </Col>
                </Row>
            </Container>
            
        </div>

    )

}



const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(DisplayVideo)