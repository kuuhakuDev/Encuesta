import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function QCero(prop) {
    return prop.content.map((con, index) => 
        <Grid item key={index}>
            <Typography variant="subtitle1" gutterBottom align="center">
                {con}
            </Typography>
        </Grid>
    )
}
  