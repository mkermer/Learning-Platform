import React, { useState } from 'react'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import config from '../../config/config'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import './RegisterForm.css'
import teaching from '../../images/teaching.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login';
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


            <div className="container">
                <div className="left">
                    <div className="inner">
                        <div className="logo">Share valuable Skills</div>

                        <Form className="form-elem">
                            <Form.Group controlId="formBasicCategory">
                                <Form.Label>Learn or teach ?</Form.Label>
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

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                    type="firstName" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)}
                                    type="lastName" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control value={username} onChange={(e) => setUsername(e.target.value)}
                                    type="username" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control value={contact} onChange={(e) => setContact(e.target.value)}
                                    type="e-mail" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Interests/Expertise</Form.Label>
                                <DropdownMultiselect
                                    options={["Coding", "Music", "Selfdevelopement", "Stocks", "Technolgies", "Books"]}
                                    name="countries"
                                    handleOnChange={(selected) => {
                                        setExpInt(selected);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="save password" />
                            </Form.Group>


                            <Button className="btn" variant="primary" onClick={register} >
                                Register
                        </Button>
                            <Button className="btn" variant="primary" >
                                <Link to="/login">Return to login</Link>
                            </Button>
                        </Form>
                    </div>
                </div>

                <div className="right">
                    <img src={teaching} className="imge" alt="" />
                </div>

            </div>
        </div>
        
    )
}

export default RegisterForm;