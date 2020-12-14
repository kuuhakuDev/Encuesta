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
    const [check, setCheck] = useState({});
    const [textDisabled, setTextDisabled] = useState(true);

    useEffect(() => {
        var c = prop.content.map((con) => false);
        setCheck(c);
    }, [state.title]);

    function select(e){
        e.preventDefault();
        var index = prop.content.findIndex(con => con === e.target.value );
        var inp = document.getElementById('standard-basic');
        setCheck(prop.content.map((c) => c === e.target.value? true: false));

        setTextDisabled(e.target.value == 'Otro'? false: true);
        
        var passed = (e.target.value == "Otro" && inp.value == "")? true: false;
        console.log(inp.value)
        setState({
            title: state.title,
            content: state.content,
            type: state.type,
            next: {
                disabled: passed,
                index: state.next.menu[index],
                menu: state.next.menu
            },
            back: state.back,
            name: state.name
        })
    }

    function onChange(e){
        var passed = (e.target.value == "")? true: false;
        var index = prop.content.findIndex(con => con === 'Otro');
        setState({
            title: state.title,
            content: state.content,
            type: state.type,
            next: {
                disabled: passed,
                index: state.next.menu[index],
                menu: state.next.menu
            },
            back: state.back,
            name: state.name
        })
    }

    return (
        <Grid item justify="center" container>
            <FormControl component="fieldset">
                <FormLabel component="legend">Selecciona una opción</FormLabel>
                <RadioGroup onChange={select}>
                    <KRadio content={prop.content} check={check} disabled={textDisabled} onChange={onChange}/>
                </RadioGroup>
            </FormControl>
        </Grid>
    )
}
  
function KRadio(prop){
    return prop.content.map((con, index) => 
        <div>
            <FormControlLabel key={index} value={con} control={<Radio color="primary" checked={prop.check[index]}/>} label={con} />
            {con == 'Otro' && <div><br/><TextField id="standard-basic" label="Espesifique su respuesta  " disabled={prop.disabled} onChange={prop.onChange}/></div>}
        </div>
        
    )
}