import React, { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../../config/config'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Button } from 'react-bootstrap';
import DisplayButton from './DisplayButton';
import Cards from './Cards'


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

    const averageRating = (arr, setAvgRat) => {
        let sum = 0;
        arr.map(review => {

            sum += review.rating;
        })



        console.log(sum);
        let average = sum / arr.length;
        console.log(average)
        const flooreAvg = Math.floor(average)

        setAvgRat(flooreAvg);
    }

    return (
        <div>
            <Cards videos={videos} />
        </div>
    )

}


const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(SearchVideos)
