import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButtonElement(props) {
  const classes = useStyles();
  // REC-2: there will be a text - “Button Clicked” below the “Press” button.
  const [textMarker, setTextMarker] = useState('');

  const colorMode = () => {
      props.rectRefsToButton('green');
      setTextMarker('Button Clicked');
  }

  return (
    <div className={classes.root}>     
      <Button 
      onClick={colorMode}
      variant="contained" 
      color="secondary">
        Press
      </Button>
      <h1>{ textMarker }</h1>
    </div>
  );
}

