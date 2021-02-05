// import React from "react";
// import {Nav} from "react-bootstrap";
// // import { withRouter } from "react-router";
// import { NavHashLink } from "react-router-hash-link";
// import { HashLink } from "react-router-hash-link";
// import './Sidebar.css'

// function Sidebar(props) {
   

//     return (
//         <>
//     <div className="nav-bar">
//             <Nav className="col-md-12 d-none d-md-block  sidebar"
//             activeKey="/home"
//             onSelect={selectedKey => alert(`selected ${selectedKey}`)}
//             >
//                 <div className="sidebar-sticky"></div>
//             <Nav.Item>
//                 <Nav.Link as={HashLink} smooth to="/#home">Home</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link as={HashLink} smooth to="/#Link">Link</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link as={HashLink} smooth to="/#Link">Link</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link as={HashLink} smooth to="/#Link"> Link</Nav.Link>
//             </Nav.Item>
//             </Nav>
//           </div>
//         </>
//         );
//   };
// //   const Side = withRouter(Sidebar);
// //   export default Side
// export default Sidebar;

import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import './Sidebar.css';
import {IconContext} from 'react-icons';

function Sidebar() {
    const [navbar, setNavbar]= useState (false)

    const showNavbar = () => setNavbar(!navbar)
return (

    <>
    <IconContext.Provider value={{color:'fff'}}>
    <div className= 'navbar'>
        <Link to= "#" className='menu-bars'>
        <FaIcons.FaBars onClick ={showNavbar} />
        </Link>
    </div>
    <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick ={showNavbar}>
            <li className = "navbar-toogle">
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                    </Link>
            </li>
            {SideBarData.map ((item, index) => {
                return (
                    <li key = {index} className = {item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                            </Link>
                            </li>
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
    </>
);

}
export default Sidebar;

