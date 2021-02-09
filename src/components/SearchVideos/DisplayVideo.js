import React, { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../../config/config'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Player } from 'video-react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchVideos.css'
import { FaStar } from 'react-icons/fa'
import ReactStars from 'react-rating-stars-component';
import { Button } from 'react-bootstrap';


const DisplayVideo = (props) => {

    const [highlighted, highlightRate] = useState(-1);
    const [rate, setRating] = useState(null);
    const [text, setText] = useState("");
    const timestamp = Date.now();
    const image = props.applicationState.user.image;
    const instructor = props.applicationState.video.instructor;
    const student = props.applicationState.user.studentName;
    const courseName = props.applicationState.video.courseName

    useEffect(() => {

    })
    const ratingReview = (rating) => {
        setRating(rating);

    }

    const post = async () => {
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
                {/* {[...Array(5)].map(star => {
                    // return (<FontAwesomeIcon key={i} icon={faStar} className={highlighted > i - 1 ? 'purple' : ''}
                    //     onMouseEnter={highlightRate(i)}
                    //     onMouseLeave={highlightRate(-1)}
                    // />
                    return (
                        <label>
                            <input type="radio" name="rating">

                            </input>
                        </label>

                    );

                })
                } */}

                <Form className="form-elem">

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


                </Form>
            </div>
        </div>

    )



}













const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(DisplayVideo)