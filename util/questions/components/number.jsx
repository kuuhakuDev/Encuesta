import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {AppContext, questions} from '../questions'

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs() {
  const [values, setValues] = React.useState({
    numberformat: '0',
  });
  const [change, setChange] = React.useState(true);
  //const [number, setNumber] = React.useState(0);
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    var num = 0;
      setValues({
        ...values,
        numberformat: num,
      });
  }, [state.title]);

    const handleChange = (event) => {
      var num = event.target.value;
      setValues({
        ...values,
        [event.target.name]: num,
      });
      if(num != 0){
        setState({
          title: state.title,
          content: state.content,
          type: state.type,
          next: {
              disabled: false,
              index: state.next.index
          },
          back: state.back,
          name: state.name
        })
        setChange(false);
        console.log("dentro");
      }else{
        setState({
          title: state.title,
          content: state.content,
          type: state.type,
          next: {
              disabled: true,
              index: state.next.index
          },
          back: state.back,
          name: state.name
        })
        setChange(true);
      }
    };

  return (
      <Grid item container justify="center">
          <TextField
        label="En dolares"
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        />
      </Grid>
  );
}