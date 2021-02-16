import React, { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../../config/config'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import DisplayButton from './DisplayButton';
import Cards from './Cards'
import Filter from './Filter'

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



    return (

        <div>
            <Container className="searchVideos">
                <Row>
                    <Filter videos={videos} vidFunction={GetVideos} setVideos={setVideos} />
                </Row>
                <Row>
                    <Cards className="VideoCard content" videos={videos} />
                </Row>
            </Container>
        </div>
    )

}


const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(SearchVideos)
