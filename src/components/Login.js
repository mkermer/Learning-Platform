import React, { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../config/config';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.action';


function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                history.push('/landing')
            } else {

            }
        }
        catch (err) {

        }
    }

    return (
        <div className="container">
            <div className="left">
                <div className="inner">
                    <div className="logo">Login</div>

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

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="save password" />
                        </Form.Group>

                        <Button className="btn" variant="primary" onClick={authentication}>
                            Login
                            </Button>
                        <div className="registerLink">
                            <a href="/">do not have an account yet? Register</a>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Login);