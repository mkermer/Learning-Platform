import React, { useState, useEffect } from 'react'
import categoryfunction from '../../functions/categoryfunction';
import Cards from './Cards';
import Filter from './Filter';
import { Button, Container, Row, Jumbotron } from 'react-bootstrap';
import './SearchVideos.css';

const CategoryMusic = (props) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        categoryfunction("Music", setVideos)
        console.log(videos);
    }, [])


    return (
        // <div>
        //     <Filter videos={videos} vidFunction={categoryfunction}
        //         setVideos={setVideos} category={"Music"} />
        //     <Cards videos={videos} />
        // </div>
        <div>
            <Jumbotron fluid>
                <h1>Browse all Videos in <strong>Music</strong></h1>
            </Jumbotron>

            <Container className="searchVideos">
                <Row>
                    <Filter videos={videos} vidFunction={categoryfunction} setVideos={setVideos} category={videos} />
                </Row>
                <Row>
                    <Cards className="VideoCard content" videos={videos} />
                </Row>
            </Container>
        </div>
    )

}



export default CategoryMusic