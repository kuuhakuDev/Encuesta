import React, {useContext, useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import {AppContext, questions} from '../questions'

export default function Group(prop) {
    const [state, setState] = useContext(AppContext);

    /* useEffect(() => {
        var c = prop.content.map((con) => false);
        setCheck(c);
    }, [state.title]); */

    function onChange(e){
        var passed = (e.target.value == "")? true: false;
        setState({
            title: state.title,
            content: state.content,
            type: state.type,
            next: {
                disabled: passed,
                index: state.next.index,
                menu: state.next.menu
            },
            back: state.back,
            name: state.name
        })
    }

    return (
        <Grid item justify="center" container>
            <FormControl component="fieldset">
                <TextField id="textArea" label="Escriba su respuesta" multiline
          rows={5} onChange={onChange} variant="outlined"/>
            </FormControl>
        </Grid>
    )
}
