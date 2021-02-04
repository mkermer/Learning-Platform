import React from "react";
import {Nav} from "react-bootstrap";
// import { withRouter } from "react-router";
import { NavHashLink } from "react-router-hash-link";
import { HashLink } from "react-router-hash-link";
import './Sidebar.css'

function Sidebar(props) {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link as={HashLink} smooth to="/#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={HashLink} smooth to="/#Link">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={HashLink} smooth to="/#Link">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={HashLink} smooth to="/#Link"> Link</Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
//   const Side = withRouter(Sidebar);
//   export default Side
export default Sidebar;