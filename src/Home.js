import {Container, Row, Col} from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar.js";
import './Sidebar.css'

function Home(props) {

    return (
        <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        Components here
                    </Col> 
                </Row>
  
            </Container>
        </>
        );
  };
//   const Navigation = withRouter(Home);
//   export default Navigation;
export default Home;