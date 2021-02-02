import react from 'react';
import {Carousel, Col} from 'react-bootstrap';


function Slideshow(){
    return(
        <>
            <Col xs={12} md={6} lg={4}>
                    <h2> Featured in Category(Music) </h2>
                    <Carousel>
                        <Carousel.Item>
                            <iframe
                            className="d-block w-100"
                            src="https://www.youtube.com/embed/EPxqPw1N1Qk?controls=0"
                            alt="Video Name"
                            />
                            {/* <Carousel.Caption>
                            <h3>Video Name</h3>
                            </Carousel.Caption> */}
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
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <h2> Featured in Category(Sport) </h2>
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
                    <h2> Featured in Category(IT) </h2>
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

export default Slideshow;