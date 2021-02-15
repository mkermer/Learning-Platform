import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import lectures from '../../static/lectures';
import useWindowPosition from '../../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '200vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function Lectures () {
  const classes = useStyles();
  const checked = useWindowPosition('landingPage');
  return (
    <div className={classes.root} id="images">
      <ImageCard lecture = {lectures[1]} checked={checked} />
      <ImageCard lecture = {lectures[0]} checked ={checked}/>
      <ImageCard lecture = {lectures[2]} checked ={checked}/>
      <ImageCard lecture = {lectures[3]} checked ={checked}/>
      
    </div>
  );
}
