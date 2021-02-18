import React, { useState, useEffect, Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Player } from 'video-react';
import DisplayButton from './DisplayButton';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import './SearchVideos.css';
import './Video.css';

class CustomPlayer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate = () => {
        this.refs.player.load()

    }

    render() {
        return (
            <Player ref="player" className="video-react">
                <source src={this.props.url} />
            </Player>
        )
    }

}



const Cards = (props) => {
    const videos = props.videos;



    console.log('RenderCards')
    return (
        <>
            {videos.map(video => {
                console.log(`video name: ${video.videoName}, video url: ${video.url}`)

                return (
                    <Col xs={12} md={6}>
                        <Card className="video content">
                            {/* <link
                            rel="stylesheet"
                            href="https://video-react.github.io/assets/video-react.css"
                        /> */}
                            <CustomPlayer url={video.url} />

                            <Card.Body>
                                <Card.Title>{video.videoName}</Card.Title>
                                <Card.Text>
                                    {video.description}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><Row><Col>Instructor:</Col> <Col>{video.instructor}</Col></Row></ListGroupItem>
                                <ListGroupItem><Row><Col>Course: </Col> <Col>{video.courseName}</Col></Row></ListGroupItem>
                                <ListGroupItem><Row><Col>Uploaded: </Col> <Col><Moment fromNow>{video.timestamp}</Moment></Col></Row></ListGroupItem>
                                <ListGroupItem>
                                    <Row>
                                        <Col>Rating:</Col>
                                        <Col>
                                            <FontAwesomeIcon icon={faStar} className={video.avgRat > 0 ? 'blue' : ''} />
                                            <FontAwesomeIcon icon={faStar} className={video.avgRat > 1 ? 'blue' : ''} />
                                            <FontAwesomeIcon icon={faStar} className={video.avgRat > 2 ? 'blue' : ''} />
                                            <FontAwesomeIcon icon={faStar} className={video.avgRat > 3 ? 'blue' : ''} />
                                            <FontAwesomeIcon icon={faStar} className={video.avgRat > 4 ? 'blue' : ''} />
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <DisplayButton video={video} />
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}

        </>
    )

}

export default Cards
