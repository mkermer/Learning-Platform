
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import Videos from './Videos';





function MyVideos(props) {

    const [videoArr, setVideoArray] = useState([]);

    const [courseArr, setCourseArray] = useState([]);
    const [videoNameArr, setVideoNameArr] = useState();

    useEffect(async () => {

        setVideoArr();

    }, [])

    useEffect(async () => {

        showVideos()

    }, [videoArr])


    const setVideoArr = async () => {
        const response = await axios.get(config.baseUrl + '/video');
        const videos = response.data;
        const instructorArr = [];

        videos.map(video => {
            if (video.instructor === props.applicationState.user.instructorName) {
                instructorArr.push(video);
            }
        })
        setVideoArray(instructorArr);

    }

    const showVideos = () => {
        const videosByCourseName = videoArr.reduce((acc, value) => {

            if (!acc[value.courseName]) {
                acc[value.courseName] = [];
            }

            // Grouping
            acc[value.courseName].push(value);

            return acc;

        }, []);
        const videoArray = [];
        videoArray.push(videosByCourseName);

        var values = (Object.values(videosByCourseName))
        setVideoNameArr(values)

        const keys = (Object.keys(videosByCourseName))
        setCourseArray(keys)
    }



    return (
        <div className="MyVideos">
            <div className="heading"><h2>My Videos</h2></div>


            {courseArr.map(course => {
                return (
                    <Videos course={course} videoNameArr={videoNameArr} />
                )
            })}

        </div>
    );
};

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(MyVideos);