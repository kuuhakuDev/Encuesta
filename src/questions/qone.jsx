import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export function QOne() {
    return (
        <Grid container spacing={2}  justify="center">
            <Grid item>
                <Typography variant="h6" gutterBottom align="center">
                    ¿Tienes empresa o eres persona natural?
                </Typography>
            </Grid>
            <Grid item>
                <FormControl component="fieldset">
                    <FormLabel component="legend">¿Tienes empresa o eres persona natural?</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    );
  }
  