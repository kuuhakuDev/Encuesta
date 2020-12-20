import React, {useContext, useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {AppContext} from '../questions'

export default function CheckboxesGroup(prop) {

  const [state, setState] = useState(prop.content.map((con) => [con, false]));
  const [context, setContext] = useContext(AppContext);

  useEffect(() => {
    var c = prop.content.map((con) => [con, false]);
    setState(c);
  }, [context.title]);

  const handleChange = (event) => {
    event.preventDefault();
    //setState({ ...state, [event.target.name]: event.target.checked });
    var map = state.map((s) => [s[0], s[0] == event.target.name? event.target.checked: s[1]])
    setState(map);
    var passed = true;
    var i = 0;
    while (passed && i < map.length) {
      if(map[i][1]) {passed = false;}
      i++;
    }
    setContext({
      title: context.title,
      content: context.content,
      type: context.type,
      next: {
        disabled: passed,
        index: context.next.index,
        menu: context.next.menu
      },
      back: context.back,
      name: context.name
    })
  };

  return (
    <Grid item justify="center" container>
      <FormControl component="fieldset">
        <FormLabel component="legend">Puede seleccionar múltiples opciones</FormLabel>
        <FormGroup>
          {/* <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          /> */}
          <KCheck content={prop.content} ck={state} cg={handleChange}/>
        </FormGroup>
      </FormControl>
    </Grid>
  );
}

function KCheck(prop){
  return prop.content.map((con, index) =>
        <FormControlLabel
        key={index}
        control={<Checkbox color="primary"  checked={prop.ck[index][1]} name={con} onChange={prop.cg}/>}
        label={con}
        />
  )
}