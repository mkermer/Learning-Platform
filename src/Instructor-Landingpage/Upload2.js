import React, { useState, useEffect } from 'react';
import { Form, Container, Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';
import axios from 'axios';
import config from '../config/config';


function Upload2(props) {
    const [video, setVideo] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");
    const [courseName, setCourseName] = useState("");
    const instructor = props.applicationState.user.instructorName


    const [disabled, setDisabled] = useState(true)



    const setButton = () => {
        setDisabled(false)
    }

    // const debug = async () => {

    //     const updatedInstructorCourse = {

    //     }

    //     try {
    //         const response = await axios.post(config.baseUrl +
    //             `/instructor/update/${props.applicationState.user._id}`, updatedInstructorCourse);
    //         console.log(response.data);
    //     } catch (err) {

    //     }
    // }

    const setVideoUrl = () => {
        const data = new FormData;
        data.append("file", video);
        data.append("upload_preset", "inflog");
        data.append("cloud_name", "davidwalzer");
        fetch("https://api.cloudinary.com/v1_1/davidwalzer/video/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {

                console.log(data.url)
                const newUrl = data.url;
                console.log(newUrl)

                if (newUrl !== "") {
                    setCourseUrl(newUrl);
                    setButton();

                }

            })
            .catch(err => {
                console.log(err);
            })




    }


    const debug2 = async () => {
        const newVideo = {
            courseName: courseName,
            category: category,
            instructor: instructor,
            url: url
        }
    }


    const SetVideo = (e) => {
        setVideo(e.target.files[0]);
        console.log(e.target.files)

    }

    return (
        <>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="Upload">
                        <Form.Group>
                            <Form.Label>Course name</Form.Label>
                            <Form.Control type="text" value={courseName}
                                onChange={(e) => setCourseName(e.target.value)
                                } />
                        </Form.Group>
                        <Form.Group controlId="formBasicCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value=''>please select type</option>
                                <option value="Coding">Coding</option>
                                <option value="Music">Music</option>
                                <option value="Selfdevelopement">Selfdevelopement</option>
                                <option value="Stocks">Stocks</option>
                                <option value="Technologies">Technologies</option>
                                <option value="Books">Books</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Video ID </Form.Label>
                            <Form.Control type="url" value="https://www.youtube.com/embed/" />
                        </Form.Group>

                        <Form.Group>
                            <Form.File accept="video/*" label="Upload Video" onChange={SetVideo} />
                        </Form.Group>

                        <Button variant="primary" onClick={setVideoUrl} >
                            Upload
                </Button>
                        <Button variant="primary" onClick={debug2} disabled={disabled}>
                            Debug
                </Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Upload2);