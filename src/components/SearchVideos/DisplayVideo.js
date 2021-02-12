import React, { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../../config/config'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Player } from 'video-react';
import { Form } from 'react-bootstrap';
import './SearchVideos.css';
import './DisplayVideo.css'
import ReactStars from 'react-rating-stars-component';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import { Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Arrow90degLeft } from 'react-bootstrap-icons';




const DisplayVideo = (props) => {


    const [rate, setRating] = useState(null);
    const [text, setText] = useState("");
    const timestamp = Date.now();
    const image = props.applicationState.user.image;
    const student = props.applicationState.user.studentName;
    const instructor = props.applicationState.video.instructor;
    const courseName = props.applicationState.video.courseName;
    const url = props.applicationState.video.url;
    const category = props.applicationState.video.category;
    const description = props.applicationState.video.description;
    const videoTimestamp = props.applicationState.video.timestamp;
    const videoName = props.applicationState.video.videoName;


    const [reviewArr, setReviewArr] = useState([]);
    const [avgRat, setAvgRat] = useState();


    useEffect(async () => {
        await getReviews();


    }, [setAvgRat, setReviewArr])


    const ratingReview = (rating) => {
        setRating(rating);
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
        setReviewArr(instructorArr);

        averageRating(instructorArr, setAvgRat);

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
    }



    const post = async () => {
        newReview();
        updateAvgRat();
    }

    const newReview = async () => {
        const newReview = {
            instructor: instructor,
            student: student,
            courseName: courseName,
            text: text,
            rating: rate,
            image: image,
            timestamp: timestamp
        }

        try {
            const response = await axios.post(config.baseUrl +
                `/review/add`, newReview);
            console.log(response.data);
        } catch (err) {
            console.log(err)
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
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <link
                rel="stylesheet"
                href="https://video-react.github.io/assets/video-react.css"
            />
            <Player>
                <source src={props.applicationState.video.url} />
            </Player>

            <div>


                <Form className="form-elem">
                    <h1>Overall Rating</h1>
                    <FontAwesomeIcon icon={faStar} className={avgRat > 0 ? 'blue' : ''} />
                    <FontAwesomeIcon icon={faStar} className={avgRat > 1 ? 'blue' : ''} />
                    <FontAwesomeIcon icon={faStar} className={avgRat > 2 ? 'blue' : ''} />
                    <FontAwesomeIcon icon={faStar} className={avgRat > 3 ? 'blue' : ''} />
                    <FontAwesomeIcon icon={faStar} className={avgRat > 4 ? 'blue' : ''} />

                    <h1>Reviews</h1>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label><h3>Your Review</h3></Form.Label><br />
                        <ReactStars activeColor="blue" size={30} count={5} isHalf={true}
                            onChange={ratingReview} />

                        <Form.Control
                            type="firstName" value={text} placeholder="" as="textarea" rows={5} onChange={(e) => setText(e.target.value)} />
                    </Form.Group>
                    <Button className="btn" variant="primary" onClick={post} >
                        Post
                    </Button>
                    <div className="ShowRating">
                        <div className="heading"><h1> Latest Reviews</h1></div>
                        {reviewArr.map(review => {
                            return (
                                <Toast>
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
                </Form>
            </div>
        </div>

    )



}













const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(DisplayVideo)