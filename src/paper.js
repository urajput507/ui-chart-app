import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextField,Button,FormControlLabel} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: 80,
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(40),
      textAlign: 'center',
      margin: '0 auto',
    },
  },
  textfield: {
      width: 350,
      marginBottom: 20,
      
  }



}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
    <Paper elevation={3}>
    <h1>Sign In</h1>      
    
    <TextField  label="Email" variant="outlined" className={classes.textfield} />   <br />
    <TextField label="Password" type="password" variant="outlined" className={classes.textfield} />   
    <Button  size="large" variant="contained" color="secondary">Login</Button>
    </Paper>
    </div>
    
  );
}