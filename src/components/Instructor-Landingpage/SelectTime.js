import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config/config'
import { Button, Form } from 'react-bootstrap';


const SelectTime = (props) => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const meeting = props.meeting;


    const updateTime = async () => {
        const updatedCourse = {
            instructor: meeting.instructor,
            student: meeting.student,
            course: meeting.course,
            category: meeting.category,
            timestamp: time,
            day: date
        }
        try {
            const response = await axios.post(config.baseUrl + `/course/update/${meeting._id}`, updatedCourse)
            console.log(response.data);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }


    }

    return (
        <div className="content">
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Set Date for meeting</Form.Label>
                <Form.Control value={date} onChange={(e) => setDate(e.target.value)} placeholder="DD/MM/YYYY"
                    type="date" />
            </Form.Group>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Set Time for meeting</Form.Label>
                <Form.Control value={time} onChange={(e) => setTime(e.target.value)} placeholder="14:00"
                    type="username" />
            </Form.Group>
            <Button onClick={updateTime}>
                Update Time
            </Button>
        </div>
    )
}


export default SelectTime 