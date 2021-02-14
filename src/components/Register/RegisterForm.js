import React, { useState } from 'react'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import config from '../../config/config'
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './RegisterForm.css'
import { Link } from "react-router-dom";




const RegisterForm = (props) => {
    // set state for input fields
    const [type, setType] = useState("")
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [expInt, setExpInt] = useState("");
    // declare rest of mongodb schema 
    const image = "";
    const description = "";
    const subHeader = "";
    const score = 0;
    const courses = [];
    const reviews = [];
    const schedules = [];

    const register = async () => {

        if (type === 'student') {
            const student = {
                firstName: firstName,
                lastName: lastName,
                studentName: username,
                password: password,
                description: description,
                subHeader: subHeader,
                contact: contact,
                image: image,
                score: score,
                interests: expInt,
                courses: courses,
                reviews: reviews,
                schedules: schedules,
                type: type
            }

            try {
                const response = await axios.post(config.baseUrl + '/student/add', student);
                console.log(response.data);


            } catch (err) {
                console.log(err);
            }

        } else if (type === "instructor") {
            const instructor = {
                firstName: firstName,
                lastName: lastName,
                instructorName: username,
                password: password,
                description: description,
                subHeader: subHeader,
                contact: contact,
                image: image,
                score: score,
                expertise: expInt,
                courses: courses,
                reviews: reviews,
                schedules: schedules,
                type: type
            }

            try {
                const response = await axios.post(config.baseUrl + '/instructor/add', instructor);
                console.log(response.data);


            } catch (err) {
                console.log(err);
            }
        }
    }


    return (
        <div className="register">
            <Container>


                <Form className="form-elem">
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId="formBasicCategory">
                                <Form.Label><h3>Learn or teach ?</h3></Form.Label>
                                <Form.Control
                                    as="select"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value=''>please select type</option>
                                    <option value="student">Student</option>
                                    <option value="instructor">Instructor</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                    type="firstName" placeholder="John" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)}
                                    type="lastName" placeholder="Doe" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={contact} onChange={(e) => setContact(e.target.value)}
                                    type="e-mail" placeholder="john.doe@example.com" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control value={username} onChange={(e) => setUsername(e.target.value)}
                                    type="username" placeholder="Jonny123" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="****" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Interests/Expertise</Form.Label>
                                <DropdownMultiselect
                                    options={["Coding", "Music", "Technologies",]}
                                    name="countries"
                                    handleOnChange={(selected) => {
                                        setExpInt(selected);
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save password" />
                    </Form.Group>


                    <Button className="btn" variant="primary" onClick={register} >
                        Register
                            </Button>
                    <Button className="btn" variant="primary" >
                        <Link to="/login">Return to Login</Link>
                    </Button>
                </Form>
                {/* </Col>
                            <Col xs={12} xl={1}> */}
                <div className="logo">
                    <div className="logo-text">
                        <span>SHARE</span> <span>VALUEABLE</span> <span>SKILLS AT</span>
                    </div>
                    <div className="logo-brand">
                        <span> TeachYourBest </span>
                    </div>
                </div>
                {/* </Col>
                        
                        </Row> */}

            </Container>



        </div>

    )
}

export default RegisterForm;