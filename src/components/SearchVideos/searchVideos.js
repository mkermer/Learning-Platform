import React, { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../../config/config'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import DisplayButton from './DisplayButton';
import Cards from './Cards'


const SearchVideos = (props) => {

    const [videos, setVideos] = useState([]);


    useEffect(() => {
        GetVideos();

    }, [])


    const GetVideos = async () => {
        const response = await axios.get(config.baseUrl + '/video');
        console.log(response.data);
        setVideos(response.data)

    }


    function handleChange(e) {

        if (e.target.value === '') {
            GetVideos();
        } else {
            var filteredVideo = videos.filter(
                (video) =>
                    video.videoName.toLowerCase().indexOf(e.target.value.toLowerCase()) >=
                    0
            );
            setVideos(filteredVideo);
        }

    }

    function sort(e) {
        if (e.target.value === '') {
            GetVideos();
        } else if (e.target.value === 'name') {
            let newVideos = [...videos];
            let sorted = newVideos.sort((a, b) =>
                a.instructor.localeCompare(b.instructor)
            );
            console.log(sorted);
            setVideos(sorted);
        } else if (e.target.value === 'latest') {
            let newVideos = [...videos];
            let sorted = newVideos.sort((a, b) => b.timestamp - a.timestamp);
            console.log(sorted);
            setVideos(sorted);
        }
    }



    return (

        <div>
            <Container className="searchVideos">
                <Form inline>

                    <Form.Control type="text" placeholder="search" onChange={handleChange} />

                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                        SortyBy
                            </Form.Label>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                        onChange={sort}
                    >
                        <option value="">Choose...</option>
                        <option value="name">Instructor</option>
                        <option value="latest">Latest Video</option>
                        <option value="3">Three</option>
                    </Form.Control>


                </Form>
                <Row>

                    <Col xs={12} md={6} lg={6} xl={4}>
                        <Cards className="VideoCard" videos={videos} />
                    </Col>
                </Row>
            </Container>
        </div>
    )

}


const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(SearchVideos)
