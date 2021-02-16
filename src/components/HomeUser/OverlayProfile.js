import React, { useContext } from "react";
import { Popover, OverlayTrigger, Overlay, Button, Row, Col } from "react-bootstrap";
import { PersonCircle, PencilSquare, BoxArrowRight, BoxArrowInRight, Pen } from "react-bootstrap-icons";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import './OverlayProfile.css'
// import {Link} from 'react-router-dom'

function OverlayProfile(props) {

  const logout = () => {
    props.actions.storeUserData(false)
  }

  if(props.applicationState.user !== false){

  return (

    <>

        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id="popover-positioned-bottom" className="popover">
              <Popover.Title>
                <Row>
                  <Col xs={5}>
                    <img src={props.applicationState.user.image} alt="pic" />
                  </Col>
                  <Col xs={7}>
                    <h3>{props.applicationState.user.firstName}</h3>
                    <h3>{props.applicationState.user.lastName}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <p> <em>{props.applicationState.user.subHeader}</em></p>
                  </Col>
                </Row>
              </Popover.Title>
              <Popover.Content>
                
                <p className="content-small">{props.applicationState.user.description}</p>
                <div className="content-small"> 
                  <p> Interested in: </p>
                  <ul>
                    {props.applicationState.user.interests.map(interest =>  {
                      return(
                          <li>
                            {interest}
                          </li>
                      )}
                    )}
                    
                  </ul>
                </div>

                <Button href="/update">
                  Edit Profile &nbsp; 
                  <PencilSquare size={20}/>
                </Button>
                
                <Button variant="danger" href="/" onClick={logout}>
                  Logout &nbsp; 
                  <BoxArrowRight size={20}/>
                </Button>

          </Popover.Content>
        </Popover>
      }
    >
      <PersonCircle className="person" size={35}/>
    </OverlayTrigger>



    </>
  )
    } else {
      return (
      <>
      
      <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id="popover-positioned-bottom" className="popover">
              <Popover.Title>
                <p> Please login or register first</p>
              </Popover.Title>
              <Popover.Content>
                <Button href="/login">
                  Login &nbsp; 
                  <BoxArrowInRight size={20}/>
                </Button>
                <Button href="/register">
                  Register &nbsp; 
                  <Pen size={20}/>
                </Button>
              </Popover.Content>
        </Popover>
      }
    >
      <PersonCircle className="person" size={35}/>
    </OverlayTrigger>

      </>
  )
    }

}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(OverlayProfile);