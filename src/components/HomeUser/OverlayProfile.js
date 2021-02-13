import React, { useContext } from "react";
import {Popover, OverlayTrigger, Button} from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
// import {Link} from 'react-router-dom'

function OverlayNav() {

  const notLoggedPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Login or Sign up</Popover.Title>
      <Popover.Content>
        <AccordionLog />
      </Popover.Content>
    </Popover>
  );

  const loggedInPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="p">Already logged in as <b>{getName()} {getLastName()}</b></Popover.Title>
      <Button as={Link} to='/gift' id='make-gift-button'>Make a gift</Button>
      <Popover.Content>
        <button onClick={logout} className="btn btn-primary">Logout</button>
      </Popover.Content>
    </Popover>
  );

  const NotLogged = () => (
      <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={notLoggedPopover}
    >
      
        <Button variant="light" >
          <PersonCircle size={25} />
        </Button>
      
      
    </OverlayTrigger>
  );

  const Logged = () => (
       <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={loggedInPopover}
    >
      <Button variant="light" >
        <PersonCircle size={25} />
        <span id="cart-length">{orders.length}</span>
      </Button>
    </OverlayTrigger>
   
  );

  const Check = () => {
    if (!token) {
      return <NotLogged />;
    } else {
      return <Logged />;
    }
  };


  return (
    <div>
      <Check />
    </div>
  );
}

export default OverlayNav;
