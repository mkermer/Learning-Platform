import React from 'react';
import { Toast } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../actions/app.action';

function ShowRating(props){
    return(
        <div className="ShowRating">
            <div className="heading"><h1> Latest Reviews</h1></div> 
        <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            {/* <strong className="mr-auto">{props.applicationState.user.firstName}</strong> */}
            <small>just now</small>
            </Toast.Header>
            <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
        <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="pic" />
            <strong className="mr-auto">Bootstrap</strong>
            <small>2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically Heads up, toasts will stack automatically Heads up, toasts will stack automatically Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
        <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Bootstrap</strong>
            <small>2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
        <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Bootstrap</strong>
            <small>2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
        <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Bootstrap</strong>
            <small>2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
        </div>
    )
}

export default ShowRating;