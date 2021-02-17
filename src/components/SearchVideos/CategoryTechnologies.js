import React, { useState, useEffect } from 'react'
import categoryfunction from '../../functions/categoryfunction';
import Cards from './Cards';
import { Button, Container, Row, Jumbotron } from 'react-bootstrap';
import './SearchVideos.css';
import Filter from './Filter';

const CategoryTechnologies = (props) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        categoryfunction("Technologies", setVideos)
        console.log(videos);
    }, [])



    return (
      <div>
            <Jumbotron fluid>
                <h1>Browse all Videos in <strong>Coding</strong></h1>
            </Jumbotron>

            <Container className="searchVideos">
                <Row>
                    <Filter videos={videos} vidFunction={categoryfunction} setVideos={setVideos} category={'Technologies'} />
                </Row>
                <Row>
                    <Cards className="VideoCard content" videos={videos} />
                </Row>
            </Container>

        </div>
    )

}



export default CategoryTechnologies