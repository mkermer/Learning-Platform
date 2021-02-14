import React from 'react';
import { Carousel, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios'
import config from '../../config/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Player } from 'video-react';

function Slideshow(props) {
    const [category, setCategory] = useState([]);
    const [randomVid, setRandomVideos] = useState([]);

//TEST
    useEffect(async () => {

        setRandomVidFunction();
        console.log(randomVid)
    }, []);


    const setRandomVidFunction = async () => {
        const response = await axios.get(config.baseUrl + '/video');
        console.log(response.data);
        const interest = props.applicationState.user.interests;
        const category = response.data;

        // const displayVideo = () => {
        const randomInterest = "Technologies"
        console.log(randomInterest);
        // interest[Math.floor(Math.random() * interest.length)];



        let arrVideos = [];
        for (let i = 0; i < category.length; i++) {
            if (randomInterest === category[i]["category"]) {
                arrVideos.push(category[i]["url"]);
            }
        }

        console.log(arrVideos)
        let randomVideos = [];
        let randVid = 0;
        for (let j = 0; j <= 3; j++) {
            randVid = Math.floor(Math.random() * 10);
            let video = arrVideos[randVid % (arrVideos.length - 1)];

            if (!randomVideos.find(el => el == video)) {
                randomVideos.push(video);
            }
            // arrVideos = arrVideos.splice(randVid, randVid);
            console.log(randVid);
        }
        console.log(randomVideos)
        setRandomVideos(randomVideos)

    }

    // const number = () => {
    //     numberdisplay(3)
    //     };

    // const numberdisplay = (max) => {
    //     console.log(Math.floor(Math.random * Math.floor(max)));
    //     console.log('Hi')
    // }




    return (
        <>
            <link
                rel="stylesheet"
                href="https://video-react.github.io/assets/video-react.css"
            />
            <Col xs={12} md={6} lg={4}>
                {/* <h2> Featured in {randomInterest} </h2> */}



                <Carousel>
                    {randomVid.map((vid, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <Player>
                                    <source src={vid} />
                                </Player>
                            </Carousel.Item>)
                    })}


                </Carousel>
            </Col>

            <Col xs={12} md={6} lg={4}>
                {/* <h2> Featured in {category} </h2> */}

                <Carousel>
                    <Carousel.Item>
                        <iframe
                            className="d-block w-100"
                            src="https://www.youtube.com/embed/p3NXd3DhH08?controls=0"
                            alt="Video Name"
                        />
                        {/* <Carousel.Caption>
                            <h3>Video Name</h3>
                            </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe
                            className="d-block w-100"
                            src="https://www.youtube.com/embed/pH_G1f6KzfI?controls=0"
                            alt="Video Name"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe
                            className="d-block w-100"
                            src="https://www.youtube.com/embed/4AGhtOHoASg?controls=0"
                            alt="Video Name"
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>

            <Col xs={12} md={6} lg={4}>

                {/* <h2> Featured in {category} </h2> */}

                <Carousel>
                    <Carousel.Item>
                        <iframe
                            className="d-block w-100"
                            src="https://www.youtube.com/embed/hQAHSlTtcmY?controls=0"
                            alt="Video Name"
                        />
                        {/* <Carousel.Caption>
                            <h3>Video Name</h3>
                            </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe
                            className="d-block w-100"
                            src="https://www.youtube.com/embed/OZaFqY8UF6I?controls=0"
                            alt="Video Name"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe
                            className="d-block w-100"
                            src="https://www.youtube.com/embed/2TofunAI6fU?controls=0"
                            alt="Video Name"
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </>
    )
};

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);