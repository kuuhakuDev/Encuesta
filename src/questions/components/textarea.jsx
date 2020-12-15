import React, {useContext, useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {AppContext, questions} from '../questions'

export default function Group(prop) {
    const [state, setState] = useContext(AppContext);
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue("");
    }, [state.title]);

    function onChange(e){
        setValue(e.target.value);
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
          rows={5} onChange={onChange} variant="outlined" value={value}/>
            </FormControl>
        </Grid>
    )
}
