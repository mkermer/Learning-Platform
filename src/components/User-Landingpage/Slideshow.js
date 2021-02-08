import React from 'react';
import { Carousel, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios'
import config from '../../config/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';

function Slideshow(props) {
    const [category, setCategory] = useState([]);
    const [randomVid, setRandomVideos] = useState([]);


    useEffect(async () => {

        setRandomVidFunction();
    }, []);


    const setRandomVidFunction = async () => {
        const response = await axios.get(config.baseUrl + '/video');
        console.log(response.data);
        const interest = props.applicationState.user.interests;
        const category = response.data;

        // const displayVideo = () => {
        const randomInterest = interest[Math.floor(Math.random() * interest.length)];
        console.log(randomInterest);
        let arrVideos = [];
        for (let i = 0; i < category.length; i++) {
            if (randomInterest === category[i]["category"]) {
                arrVideos.push(category[i]["url"]);
            }
        }


        let randomVideos = [];
        let randVid = 0;
        for (let j = 0; j < 3; j++) {
            randVid = Math.floor(Math.random() * arrVideos.length);
            randomVideos.push(arrVideos[randVid]);
            arrVideos = arrVideos.splice(randVid, randVid);
        }
        // console.log(randomVideos)
        setRandomVideos(randomVideos)
        console.log(randomVid)
    }






    return (
        <>
            <Col xs={12} md={6} lg={4}>
                {/* <h2> Featured in {randomInterest} </h2> */}



                <Carousel>
                    Rendered on userspecific
                    {randomVid.map(vid => {
                    return (
                        <Carousel.Item>
                            <iframe
                                className="d-block w-100"
                                src={vid}
                                alt="Video Name"
                            />

                        </Carousel.Item>)
                })}

                    {/* <Carousel.Item>
                        <iframe
                            className="d-block w-100"
                            src="https://www.youtube.com/embed/EPxqPw1N1Qk?controls=0"
                            alt="Video Name"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe
                            className="d-block w-100"
                            src="https://www.youtube.com/embed/Bcn98eUsUdw?controls=0"
                            alt="Video Name"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe
                            className="d-block w-100"
                            src="https://www.youtube.com/embed/BBz-Jyr23M4?controls=0"
                            alt="Video Name"
                        />
                    </Carousel.Item> */}
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