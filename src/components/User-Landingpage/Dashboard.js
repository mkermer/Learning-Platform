import React, { useEffect, useState, useContext } from "react";
import { XSquare } from 'react-bootstrap-icons';
import DashContext from '../../DashContext';
import {Container, Row, Col} from "react-bootstrap";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import axios from 'axios';
import config from '../../config/config'

function Dashboard(props){
    const {showSidebar} = useContext(DashContext);
    const [meetings, setMeetings] = useState([]);
    const user = props.applicationState.user;

    useEffect(async () => {
        await getMeetings();


    }, [])


    const getMeetings = async () => {
        const response = await axios.get(config.baseUrl + '/course');
        const meetings = response.data;
        if (user.type === "student") {
            const filteredMeetings = meetings.filter(meeting =>
                meeting.student === user.studentName)
            setMeetings(filteredMeetings);
            console.log(filteredMeetings)

        } else if (user.type === "instructor") {
            const filteredMeetings = meetings.filter(meeting =>
                meeting.instructor === user.instructorName)
            setMeetings(filteredMeetings);
        }
        

    }

    return (
        <div className="Dashboard">        
            <XSquare className="close" onClick={showSidebar}/>
 
            <table>
                <thead>
                    <tr>
                        <th>
                            Date
                        </th>
                        <th>
                            Time
                        </th>
                        <th>
                            Course
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {meetings.map(meeting => {

                        return(
                            <tr>
                                <td>
                                    {meeting.day}
                                </td>
                                <td>
                                    {meeting.timestamp}
                                </td>
                                <td>
                                    <a href={`https://meet.jit.si/${meeting.course}`}>{meeting.course}</a>
                                </td>
                            </tr>
                        )
                    })}
                        
                    </tbody>
            </table>         
        </div> 
    )       

            
}


const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



