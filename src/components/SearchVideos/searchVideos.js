import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import config from '../../config/config'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';
import { Redirect, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Button, Container, Row, Col } from 'react-bootstrap';
import DisplayButton from './DisplayButton';

const SearchVideos = (props) => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        GetVideos();
        console.log(videos);
    }, [])

    const GetVideos = async () => {
        const response = await axios.get(config.baseUrl + '/video');
        console.log(response.data);
        setVideos(response.data)


    }



    return (
        <Container className="searchVideos">
            <Row>
            {videos.map(video => {

                if (video.url.indexOf("youtube") === -1) {
                    return (
                        <Col xs={12} md={6} lg={6} xl={4}>
                        <Card className="VideoCard">
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
                                    {/* //description */}
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
                        </Col>
                    )
                }
                if (video.url.indexOf("youtube") !== -1) {
                    return (
                        <Col  xs={12} lg={6} xl={4}>
                        <Card className="VideoCard">

                            {/* <ReactPlayer url={video.url} /> */}
                            <iframe
                                className="d-block w-100"
                                src={video.url}
                                alt="Video Name"
                            />

                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Button className="btn" variant="primary" >
                                    Watch Video
                            </Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    )

                }

            })}
            </Row>
        </Container>
    )

}


const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(SearchVideos)
