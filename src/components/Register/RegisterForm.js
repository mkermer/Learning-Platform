import React, { useState } from 'react'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import config from '../../config/config'
import { Button, Container, Form, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import './RegisterForm.css'
import { Link } from "react-router-dom";
import regpic from '../../SVG/Register_cut.svg'



const RegisterForm = (props) => {
    //verification
    const [existingName, setExistingName] = useState("");
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
    // state of Alert
    const [variant, setVariant] = useState('success');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const register = async () => {
        console.log(username);
        console.log(verificationUsername())
        if (await verificationUsername() === username) {
            console.log('it works');
            AlertWarning('existing Username')
        }
        // } else if (verificationFields() === false) {
        //     AlertWarning('Please fill out the input fields')
        // } else if (verificationEmail() === false) {
        //     AlertWarning('Please enter a valid e-mail address')
        // }
        // if (type === 'student') {
        //     registerStudent();

        // } else if (type === "instructor") {
        //     registerInstructor();
        // }
    }


    const verificationFields = () => {
        if (firstName === "" || lastName === "" || username === "" || password === "") {
            return false
        }
    }

    const verificationEmail = () => {
        if (contact.indexOf("@") === -1) {
            return false
        }
    }

    const verificationUsername = async () => {
        try {
            const studentRes = await axios.get(config.baseUrl + '/student')
            const students = studentRes.data;

            const instructorRes = await axios.get(config.baseUrl + '/instructor')
            const instructors = instructorRes.data;

            var foundStudent = students.find(student => {
                return student.studentName === username
            })
            console.log(foundStudent)
            return foundStudent.studentName


            instructors.map(instructor => {
                if (instructor.instructorName === username) {
                    return false
                }
            })


        } catch (err) {
            console.log(err)
        }

    }



    const registerStudent = async () => {
        const student = {
            firstName: firstName,
            lastName: lastName,
            studentName: username,
            password: password,
            description: description,
            subHeader: subHeader,
            contact: contact,
            image: image,
            interests: expInt,
            type: type
        }

        try {
            const response = await axios.post(config.baseUrl + '/student/add', student);
            console.log(response.data);
            AlertSuccess()

        } catch (err) {
            console.log(err);
        }
    }


    const registerInstructor = async () => {
        const instructor = {
            firstName: firstName,
            lastName: lastName,
            instructorName: username,
            password: password,
            description: description,
            subHeader: subHeader,
            contact: contact,
            image: image,
            interests: expInt,
            type: type
        }

        try {
            const response = await axios.post(config.baseUrl + '/instructor/add', instructor);
            console.log(response.data);
            AlertSuccess()
        } catch (err) {
            console.log(err);
        }
    }

    const AlertSuccess = () => {
        setShow(true);
        setText("You have registered successfully!")


    }

    const AlertWarning = (text) => {
        setShow(true);
        setVariant('warning');
        setText(text)
    }

    return (
        <div className="register">

            <Alert variant={variant} show={show}>
                {text}
            </Alert>


            <img src={regpic} />
            <div className="label">
                <h1>Register</h1>
            </div>
            <div className="centeredForm">

                <Form className="form-elem">
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId="formBasicCategory">
                                <Form.Label>Learn or teach ?</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option className="hide" value="" disabled>please select type</option>
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
                                    options={["Coding", "Music", "Technologies"]}
                                    name="countries"
                                    handleOnChange={(selected) => {
                                        setExpInt(selected);
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>


                    <Button className="btn" variant="primary" onClick={register} >
                        Register
                    </Button>
                    <br />
                    <Link to="/login">
                        Return to Login
                    </Link>
                </Form>
            </div>
        </div>

    )
}

export default RegisterForm;

{/*     <div className="logo">
                    <div className="logo-text">
                        <span>SHARE</span> <span>VALUEABLE</span> <span>SKILLS AT</span>
                    </div>
                    <div className="logo-brand">
                        <span> TeachYourBest </span>
                    </div>
                </div> */}