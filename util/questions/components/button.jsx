import React, { useState, useContext, useEffect  } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import {AppContext, ReplyContext, questions} from '../questions'
import { setCookie, parseCookies } from 'nookies'



function KButton() {

    const [disabled, setDisabled] = useState({});
    const [state, setState] = useContext(AppContext);
    const [reply, setReply] = useContext(ReplyContext);

    useEffect(() => {
        setDisabled({
            next: state.next.disabled,
            back: state.back.disabled
        });
    }, [state]);

    function next(e) {
        e.preventDefault();
        setState(questions[state.next.index]);

        if(state.name != 'finish'){
            var origin = document.location.origin;
            var url = origin + '/api/send';
            var data = reply;

            fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))//
            .then(function (result) {
                const cookies = parseCookies();
                if(cookies.kuudevEncuesta === undefined)
                setCookie(null, 'kuudevEncuesta', result.token, {maxAge: 2 * 365 * 24 * 60 * 60, path: '/',});
            });
        }
    }

    function back(e) {
        e.preventDefault();
        setState(questions[state.back.index]);
    }

    return (
        <Grid item container justify='space-between' style={{marginTop: "30px"}}>
            <Button variant="contained" color="secondary" disabled={disabled.back} onClick={back}>
                Atras
            </Button>
            <Button variant="contained" color="primary" disabled={disabled.next} onClick={next}>
                Siguiente
            </Button>
        </Grid>
    )
}

export default KButton