import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Player } from 'video-react';
import DisplayButton from './DisplayButton';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import config from '../../config/config'
import { Button } from 'react-bootstrap';

const Cards = (props) => {
    const videos = props.videos;
    const [avgRat, setAvgRat] = useState();
    const [reviewArr, setReviewArr] = useState([]);

    useEffect(() => {
        getVideos();
        console.log(avgRat);
    }, [])

    const getVideos = () => {
        videos.map(video => {
            getReviews(video);
        })

        console.log(avgRat)
    }

    const getReviews = async (video) => {
        const response = await axios.get(config.baseUrl + '/review');
        console.log(response.data);
        const reviews = response.data;
        const instructorArr = [];

        reviews.map(review => {
            if (review.instructor === video.instructor) {
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



    return (
        <div>
            {videos.map(video => {

                return (
                    <Card style={{ width: '18rem' }}>
                        <link
                            rel="stylesheet"
                            href="https://video-react.github.io/assets/video-react.css"
                        />

                        <Player>
                            <source src={video.url} />
                        </Player>
                        <Card.Body>
                            <Card.Title>{video.courseName}</Card.Title>
                            <Card.Text>
                                {video.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{video.instructor}</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <DisplayButton video={video} />
                        </Card.Body>
                    </Card>
                )
            })}
            <Button onClick={getVideos} />
        </div>
    )

}

export default Cards
