import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Player } from 'video-react';
import DisplayButton from './DisplayButton';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';


const Cards = (props) => {
    const videos = props.videos;




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
                            <Card.Title>{video.videoName}</Card.Title>
                            <Card.Text>
                                {video.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{video.courseName}</ListGroupItem>
                            <ListGroupItem>
                                <FontAwesomeIcon icon={faStar} className={video.avgRat > 0 ? 'blue' : ''} />
                                <FontAwesomeIcon icon={faStar} className={video.avgRat > 1 ? 'blue' : ''} />
                                <FontAwesomeIcon icon={faStar} className={video.avgRat > 2 ? 'blue' : ''} />
                                <FontAwesomeIcon icon={faStar} className={video.avgRat > 3 ? 'blue' : ''} />
                                <FontAwesomeIcon icon={faStar} className={video.avgRat > 4 ? 'blue' : ''} />
                            </ListGroupItem>
                            <ListGroupItem>{video.instructor}</ListGroupItem>
                            <ListGroupItem><Moment fromNow>{video.timestamp}</Moment></ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <DisplayButton video={video} />
                        </Card.Body>
                    </Card>
                )
            })}

        </div>
    )

}

export default Cards
