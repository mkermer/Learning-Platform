import React, { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../../config/config'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Button, Container, Row, Jumbotron } from 'react-bootstrap';
import DisplayButton from './DisplayButton';
import Cards from './Cards'
import Filter from './Filter'
import categoryfunction from '../../functions/categoryfunction'

const SearchVideos = (props) => {

    const [videos, setVideos] = useState([]);


    useEffect(() => {
        categoryfunction('all', setVideos)

    }, [])






    return (

        <div>
            <Jumbotron fluid>
                <h1>Browse all Videos</h1>
            </Jumbotron>

            <Container className="searchVideos">
                <Row>
                    <Filter videos={videos} vidFunction={categoryfunction} setVideos={setVideos} category={'all'} />
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
