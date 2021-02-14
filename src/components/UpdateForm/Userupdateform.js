import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Col, Container, Form, Jumbotron, Row, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import './Userupdateform.css'



const Updateform = (props) => {
    const [image, setImage] = useState("");
    const [urlImage, setUrl] = useState(props.applicationState.user.image);
    const [subHeader, setSubHeader] = useState(props.applicationState.user.subHeader);
    const [description, setDescription] = useState(props.applicationState.user.description);
    const [interests, setInterests] = useState(props.applicationState.user.interests);
    const [contact, setContact] = useState(props.applicationState.user.contact);
    const [username, setUsername] = useState(props.applicationState.user.studentName);
    const [password, setPassword] = useState(props.applicationState.user.password);
    // const score = props.applicationState.user.score;
    const firstName = props.applicationState.user.firstName;
    const lastName = props.applicationState.user.lastName;
    // const studentName = props.applicationState.user.studentName;
    const type = props.applicationState.user.type;
    const courses = props.applicationState.user.courses;
    



    const update = async () => {
        const updatedUser = {

            firstName: firstName,
            lastName: lastName,
            studentName: username,
            password: password,
            description: description,
            subHeader: subHeader,
            contact: contact,
            image: urlImage,
            // score: score,
            interests: interests,
            courses: courses,
            type: type
        }
        try {
            const response = await axios.post(`http://localhost:2000/student/update/${props.applicationState.user._id}`, updatedUser);
            console.log(response.data);
            props.actions.storeUserData(response.data)



        } catch (err) {
            console.log(err);
        }
        window.location.reload()
        alert("Your Profil has been successfully updated!")

    }

    const postDetails = () => {
        const data = new FormData;
        data.append("file", image);
        data.append("upload_preset", "inflog");
        data.append("cloud_name", "davidwalzer");
        fetch("https://api.cloudinary.com/v1_1/davidwalzer/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)


            })
            .catch(err => {
                console.log(err);
            })
        
        update();
    }


    return (
        <Container className="content UpdateProfil">
            <Jumbotron fluid>
                    <h1>Update Profile</h1>
            </Jumbotron>
            <div className="inner">
            
            <Row className="header">
                <Col xs={12} lg={4}>
                    <img src={props.applicationState.user.image} alt="pic"/>
                
                </Col>
                <Col xs={12} lg={3}>
                    <h2>{username}</h2>
                    
                    <h3>{firstName} {lastName}</h3>
                    
                    <h4>{contact}</h4>
                </Col>
                <Col xs={12} lg={5}>
                    <div className="formImg">
                        <Form className="form-elem">

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Update Image</Form.Label>
                                <Form.Control onChange={(e) => setImage(e.target.files[0])} accept="image/*" type="file"  />
                            </Form.Group>

                        </Form>
                            <Button variant="primary" onClick={postDetails}>
                                Upload Image
                            </Button>
                    </div>
                    
                </Col>
                
            </Row>
            <hr/>

                <Form className="form-elem">
                    <Row>
                        <Col md={4}>
                            <p>
                                Username
                            </p>
                        </Col>
                        <Col md={8}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Control value={username} onChange={(e) => setUsername(e.target.value)}
                                    type="username"  />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <p>
                                Email
                            </p>
                        </Col>
                        <Col md={8}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Control value={contact} onChange={(e) => setContact(e.target.value)}
                                    type="e-mail"  />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <p>
                                Password
                            </p>
                        </Col>
                        <Col md={8}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <p>
                                Short description
                            </p>
                        </Col>
                        <Col md={8}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Control type="text" value={subHeader} onChange={(e) => setSubHeader(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <p>
                                About me
                            </p>
                        </Col>
                        <Col md={8}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Control
                                value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" rows={5} placeholder="" />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <p>
                                Interests
                            </p>
                        </Col>
                        <Col md={8}>
                        <Form.Group controlId="formBasicUsername">
                            <DropdownMultiselect
                                options={["Coding", "Music", "Technolgies"]}
                                name="categories"
                                selected={props.applicationState.user.interests}
                                handleOnChange={(selected) => {
                                    setInterests(selected);
                                }}
                            />
                        </Form.Group>
                        </Col>
                    </Row>
                    <hr/>
                        {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="save changes" />
                        </Form.Group> */}
                    <Row>
                        <Col md={4}>
                        </Col>
                        <Col md={8}>
                            <Button className="btn" variant="primary" onClick={update}>
                                Update
                            </Button>

                            <div className="discardChanges">
                                <a href="/profile">Discard changes</a>
                            </div>
                        </Col>
                    </Row>
                        
                    </Form>
            </div>
        </Container>

    )
}







const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Updateform)