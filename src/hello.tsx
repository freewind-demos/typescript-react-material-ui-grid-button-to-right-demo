import Grid from '@material-ui/core/Grid';
import React from 'react';

export default function ComplexGrid() {
  return (
    <div style={{width: 400, backgroundColor: '#EEEEEE'}}>
      <Grid container>
        <Grid item xs>
          Title
        </Grid>
        <Grid item>
          X
        </Grid>
      </Grid>
    </div>
  );
}
