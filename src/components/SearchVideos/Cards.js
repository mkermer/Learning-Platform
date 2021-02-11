import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Player } from 'video-react';
import DisplayButton from './DisplayButton';
import Card from 'react-bootstrap/Card';


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
        </div>
    )

}

export default Cards
