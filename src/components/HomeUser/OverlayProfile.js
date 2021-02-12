import React, { useContext } from "react";
import {Popover, OverlayTrigger, Overlay, Button} from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';

// import {Link} from 'react-router-dom'

function OverlayProfile(props) {

  return(

    <>
    {['bottom'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Title>
            <img src={props.applicationState.user.image} alt="pic"/>
            {/* <h3>{props.applicationState.user.username}</h3> */}
          </Popover.Title>
          <Popover.Content>
            <p> {props.applicationState.user.subheader}</p>
            <p>{props.applicationState.user.description}</p>
            <p> {props.applicationState.user.interests}</p>
            
            <Button href="/update">
              Edit Profile
            </Button>
            <Button href="/">
              Logout
            </Button>
          </Popover.Content>
        </Popover>
      }
    >
      <PersonCircle size={25}/>
    </OverlayTrigger>
  ))}

    </>
  )

}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(OverlayProfile);
