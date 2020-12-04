import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from './radio';

import {AppContext, questions} from '../questions';

import Text from './text';
import Number from './number';

function Content(props) {
    //const [zero, setZero] = useState(props.value);
    const [state, setState] = useContext(AppContext);
    
    console.log(state.content)
    return(
        <Grid container spacing={2}  justify="center" direction="column">
            <Grid item>
                <Typography variant="h6" gutterBottom align="center">
                    {state.title}
                </Typography>
            </Grid>
            {
                (state.type == 'text')?
                    <Text content={state.content}/>:
                (state.type == 'radio')?
                    <Radio content={state.content}/>:
                (state.type == 'number')?
                    <Number />:
                    <div></div>
            }
        </Grid>
    )
    
    
}

export default Content