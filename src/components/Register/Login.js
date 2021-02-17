import React, { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../../config/config';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { KeyFill } from "react-bootstrap-icons";
import loginpic from '../../SVG/undraw_authentication_fsn5.svg'



function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [variant, setVariant] = useState('warning');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const history = useHistory();

    const authentication = async () => {
        const verification = {
            username: username,
            password: password
        }

        try {
            const response = await axios.post(config.baseUrl + '/verification/add', verification)
            console.log(response.data);

            const user = await axios.get(config.baseUrl + '/verification')
            const loginUser = user.data



            if (loginUser !== "Wrong login information") {
                props.actions.storeUserData(loginUser)
                console.log(props.applicationState.user)

                if (loginUser.studentName !== undefined) {
                    history.push("/UserLandingpage")
                }

                if (loginUser.instructorName !== undefined) {
                    history.push("/InstructorLandingpage")
                }
            } else {
                setVariant('warning');
                setShow(true);
                setText('wrong login information!')
            }


        } catch (err) {
            console.log(err);
        }

    }


    window.addEventListener('keydown', (event) => {
        if (event.isComposing || event.key === "Enter") {
            authentication();
        }
    });

    return (
        <div className="login">
            <Alert variant={variant} show={show}>
                {text}
            </Alert>
            <img src={loginpic} />
            <div className="centeredForm">

                <Form className="form-elem">
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder=""
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder=""
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>


                    <Button className="btn" variant="primary" onClick={authentication}>
                        <KeyFill size={30} /> <br /> Login
                                </Button>

                </Form>

            </div>

        </div>
    )


}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Login)
