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



    const categoryfun = async (category) => {
        const response = await axios.get(config.baseUrl + '/video');
        const allVideos = response.data
        const categoryVid = allVideos.filter(video => video.category === category)
        // allVideos.map(video => {
        //     if (video.category === category) {
        //         categoryVid.push(video);
        //     }
        // })

        console.log(categoryVid);
        if (setVideos) {
            setVideos(categoryVid);
        }
    }

    useEffect(() => {
        categoryfun("Coding")

    }, [])
    return (
        // <div>
        //     <Filter videos={videos} vidFunction={categoryfunction}
        //         setVideos={setVideos} />
        //     <Cards videos={videos} />
        // </div>
        <div>
            <Jumbotron fluid>
                <h1>Browse all Videos in <strong>Coding</strong></h1>
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



export default CategoryCoding