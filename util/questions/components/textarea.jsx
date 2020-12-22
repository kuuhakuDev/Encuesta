import React, {useContext, useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {AppContext, ReplyContext} from '../questions'

export default function Group(prop) {
    const [state, setState] = useContext(AppContext);
    const [reply, setReply] = useContext(ReplyContext);
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

        var r = reply;
        r[state.name] = e.target.value;
        setReply(r);
    }

    return (
        <Grid item justify="center" container>
            <FormControl fullWidth component="fieldset">
                <TextField id="textArea" label="Escriba su respuesta" multiline
          rows={3} onChange={onChange} variant="outlined" value={value}/>
            </FormControl>
        </Grid>
    )
}
