import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

// REC-4: The red rectangle is centre in the screen and should be made as a separate Component.
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 500
  }, 
  rect : {
    paddingLeft: '40%',
    paddingRight: '40%'    
  },
  grd:{
    height: '500'
  } 

});

export default function GridRect(props) {
  const classes = useStyles();
  
  // REC-3: button.The red rectangle’s width is half of the width of the screen and its height is half of the screen height.
  return (
       <div className={classes.rect}>
            <Grid item xs={6} className={classes.grd}>
                  <Card className={classes.root} variant="outlined" style= {{ backgroundColor: props.colorReactParam  }}>
                  <CardContent>
  
                  </CardContent>
                  </Card>
            </Grid>
      </div>
  );
}
