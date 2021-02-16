import React, { useState, useEffect, Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Player } from 'video-react';
import DisplayButton from './DisplayButton';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import './SearchVideos.css'

class CustomPlayer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate = () => {
        this.refs.player.load()

    }

    render() {
        return (
            <Player ref="player">
                <source src={this.props.url} />
            </Player>
        )
    }

}



const Cards = (props) => {
    const videos = props.videos;



    console.log('RenderCards')
    return (
        <div>
            {videos.map(video => {
                console.log(`video name: ${video.videoName}, video url: ${video.url}`)

                return (
                    <Card style={{ width: '18rem' }}>
                        <link
                            rel="stylesheet"
                            href="https://video-react.github.io/assets/video-react.css"
                        />
                        <CustomPlayer url={video.url} />

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
