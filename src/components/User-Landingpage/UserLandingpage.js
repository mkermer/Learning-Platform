import React, { useContext } from 'react';
import moment from 'moment';
import { Jumbotron, Container, Row, Button, Col } from 'react-bootstrap';
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
import videoPic from '../../SVG/undraw_video_files_fu10.svg'
import dashPic from '../../SVG/undraw_Selection_re_poer.svg'


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
            <div className={sidebar ? "cart-menu active" : "cart-menu"}>
                <Dashboard />
            </div>

            <Jumbotron fluid>
                <h1>{daytime(date)} {props.applicationState.user.firstName}</h1>
            </Jumbotron>


            <Container >
                <Row>
                    <Col xs={12} md={12} className="content">
                        <Slideshow />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className="content">
                        <h2>Browse all Videos</h2>
                        <Link to="/videoSearch"><Button><img src={videoPic}/></Button></Link>
                    </Col>
                    <Col xs={12} md={6} className="content">
                        <h2> Check the Dashboard</h2>
                        <Button id="dashboardbutton" onClick={showSidebar}><img src={dashPic}/></Button>
                        
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Continue user={props.applicationState.user} />
                    </Col>
                </Row>
            </Container>

            



        </div>
    )
};


const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(UserLandingpage);

