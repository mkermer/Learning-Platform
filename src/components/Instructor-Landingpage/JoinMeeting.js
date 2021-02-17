import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';


const JoinMeeting = (props) => {

    const meeting = props.meeting;

    const redirect = (props) => {
        props.actions.storeMeetingData(props.meeting)
        // history.push('/meeting')
    }

    return (
        <Button onclick={redirect} variant="primary">Start your meeting</Button>
    )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(JoinMeeting)