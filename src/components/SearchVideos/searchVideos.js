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
import categoryfunction from '../../functions/categoryfunction'

const SearchVideos = (props) => {

    const [videos, setVideos] = useState([]);


    useEffect(() => {
        categoryfunction('all', setVideos)

    }, [])






    return (

        <div>
            <Container className="searchVideos">
                <Filter videos={videos} vidFunction={categoryfunction}
                    setVideos={setVideos} category={'all'} />
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
