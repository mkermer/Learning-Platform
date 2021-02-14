import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import LandingPage from '../../components/LandingPage/LandingPage';
import Lectures from '../../components/LandingPage/Lectures';
import Team from '../../components/LandingPage/Team';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '80vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/tech.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <LandingPage/>
      <Lectures />
      {/* < Team /> */}
    </div>
  );
}
