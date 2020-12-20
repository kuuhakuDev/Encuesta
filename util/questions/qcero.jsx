import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Text from './components/text'

export function QCero(prop) {
    return (
        <Grid container spacing={2}  justify="center">
            <Grid item>
                <Typography variant="h6" gutterBottom align="center">
                    ¿Para que hacemos esta encuesta?
                </Typography>
            </Grid>
            <Text content={prop.content().zero.content}/>
        </Grid>
    );
  }
  