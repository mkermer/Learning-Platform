import React, { useState, useEffect } from 'react'
import categoryfunction from '../../functions/categoryfunction';
import Cards from './Cards';
import Filter from './Filter'
import axios from 'axios';
import config from '../../config/config';
import { Button, Container, Row, Jumbotron } from 'react-bootstrap';
import './SearchVideos.css';



const CategoryCoding = (props) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        categoryfunction("Coding", setVideos)

    }, [])

    return (

            <Jumbotron fluid>
                <h1>Browse all Videos in <strong>Coding</strong></h1>
            </Jumbotron>

            <Container className="searchVideos">
                <Row>
                    <Filter videos={videos} vidFunction={categoryfunction} setVideos={setVideos}  category={"Coding"} />
                </Row>
                <Row>
                    <Cards className="VideoCard content" videos={videos} />
                </Row>
            </Container>
        </div>
    )


}



export default CategoryCoding