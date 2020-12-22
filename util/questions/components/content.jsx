import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from './radio';

import {AppContext} from '../questions';

import Text from './text';
import Number from './number';
import TextArea from './textarea';
import Checkbox from './checkbox';

function Content(props) {
    //const [zero, setZero] = useState(props.value);
    const [state, setState] = useContext(AppContext);
    //console.log(state.content)
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
                (state.type == 'textarea')?
                    <TextArea />:
                (state.type == 'checkbox')?
                    <Checkbox content={state.content}/>:
                    <div></div>
            }
        </Grid>
    )
}

export default Content