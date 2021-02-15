import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { Link } from "react-router-dom";
import ButtonBase from '@material-ui/core/ButtonBase';
import Logo from '../../Logo/Green/logo3TYB-removebg.png'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    
   
  },
  appbar: {
    background: 'none',
    display:'flex',
    margin:'0 auto',
  },
  appbarWrapper: {
    width: '80%',
   
  },
  appbarTitle: {
    flexGrow: '0',
    position: 'relative',
  },
 
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));
export default function LandingPage() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="landingPage">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container} >
          <img src={Logo} style={{width: "300px"}} />
          <h1 className={classes.title} >
           Do your <span className={classes.colorText} id="homefont">BEST</span> <br />
           And <Link to="/register" className="links">Register</Link><span className={classes.colorText} id="homefont"> NOW</span>
          </h1>
          <Scroll to="images" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

