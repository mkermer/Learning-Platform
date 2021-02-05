import React, { useContext } from 'react';
import moment from 'moment';
import { Jumbotron, Container, Row, Button } from 'react-bootstrap';
import Slideshow from './Slideshow';
import Continue from './Continue';
import Dashboard from './Dashboard';
import DashContext from '../../DashContext';
import './UserLandingpage.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";



function UserLandingpage(props) {
    
    const {
        sidebar,
        showSidebar
    } = useContext(DashContext);

    const date = moment().format("HH");
    const daytime = (date) => {
        if (date >= 5 && date < 12) {
            return ("Good Morning ");
        } else if (date >= 12 && date < 17) {
            return ("Welcome back ");
        } else if (date >= 17 || date < 5) {
            return ("Good evening ");
        };
    };


    return (
        <div className="UserLPage">
            <div className={sidebar ? "cart-menu active": "cart-menu"}>
                <Dashboard />
            </div>
            <Button onClick={showSidebar}>Dashboard</Button>


            <Jumbotron fluid>
                <h1>{daytime(date)} {props.applicationState.user.firstName}</h1>
            </Jumbotron>


            <Container className="carousel">
                <Row>
                    <Slideshow />
                </Row>
            </Container>

            <Continue />



        </div>
    )
};


const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(UserLandingpage);

