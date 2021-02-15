import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";



const Updateform = (props) => {
    const [image, setImage] = useState("");
    const [urlImage, setUrl] = useState("");
    const [subHeader, setSubHeader] = useState(props.applicationState.user.subHeader);
    const [description, setDescription] = useState(props.applicationState.user.description);
    const [interests, setInterests] = useState(props.applicationState.user.interests)
    const score = props.applicationState.user.score;
    const firstName = props.applicationState.user.firstName;
    const lastName = props.applicationState.user.lastName;
    const studentName = props.applicationState.user.username;
    const contact = props.applicationState.user.contact;
    const password = props.applicationState.user.password;
    const type = props.applicationState.user.type;
    const courses = props.applicationState.user.courses;



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
    }

    const update = async () => {
        const updatedUser = {

            firstName: firstName,
            lastName: lastName,
            studentName: studentName,
            password: password,
            description: description,
            subHeader: subHeader,
            contact: contact,
            image: urlImage,
            score: score,
            interests: interests,
            courses: courses,
            type: type
        }

        try {
            const response = await axios.post(`http://localhost:2000/student/update/${props.applicationState.user._id}`, updatedUser);
            console.log(response.data);


        } catch (err) {
            console.log(err);
        }

    }


    return (
        <div className="container">
            <div className="left">
                <div className="inner">

                    <div className="logo">Update Profile</div>

                    <Form className="form-elem">

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Short description</Form.Label>
                            <Form.Control type="username" placeholder="" value={subHeader}
                                onChange={(e) => setSubHeader(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" rows={5} placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Image</Form.Label>
                            <Form.Control onChange={(e) => setImage(e.target.files[0])} type="file" placeholder="" />
                        </Form.Group>

                        <Button variant="primary" onClick={postDetails}>
                            Upload Image
                            </Button>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Interests/Expertise</Form.Label>
                            <DropdownMultiselect
                                options={["Coding", "Music", "Selfdevelopement", "Stocks", "Technolgies", "Books"]}
                                name="countries"
                                handleOnChange={(selected) => {
                                    setInterests(selected);
                                }}
                            />
                        </Form.Group>


                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="save changes" />
                        </Form.Group>

                        <Button className="btn" variant="primary" onClick={update}>
                            Update
                        </Button>

                        <div className="discardChanges">
                            <a href="/profile">discard changes</a>
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
export default connect(mapStateToProps, mapDispatchToProps)(Updateform)