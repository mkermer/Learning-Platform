import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import LandingPage from '../../components/LandingPage/LandingPage';
import Lectures from '../../components/LandingPage/Lectures';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/her2.png'})`,
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
    </div>
  );
}
