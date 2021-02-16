import {Container, Row, Col} from "react-bootstrap";
// import { withRouter } from "react-router";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserLandingpage from '../User-Landingpage/UserLandingpage';
import './Sidebar.css'

function Home(props) {

    return (
        <>
         {/* <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        Components here */}
                        <UserLandingpage/>
                    {/* </Col> 
                </Row>
  
            </Container> */}
        </>
        );
  };
//   const Navigation = withRouter(Home);
//   export default Navigation;
export default Home;