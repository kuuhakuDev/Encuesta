import React, { useState, useContext, useEffect  } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import {AppContext, questions, BtnContext} from '../questions'



function KButton() {
    
    /* const [disabled, setDisabled] = useState(BtnContext); */
    const [disabled, setDisabled] = useState({});
    const [state, setState] = useContext(AppContext);

    useEffect(() => {
        setDisabled({
            next: state.next.disabled,
            back: state.back.disabled
        });
    }, [state]);

    function next(e) {
        e.preventDefault();
        setState(questions[state.next.index]);
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