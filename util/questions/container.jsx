import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Provider, {questions, BtnProvider} from './questions';

import Content from './components/content';
import KButton from './components/button'
import Title from './components/title'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  }
}));

export default function ComplexGrid(prop) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop: "50px"}}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Provider>
            <BtnProvider>
              <Grid item direction="column" container>
                <Grid item style={{marginBottom: "15px"}}>
                    <Title/>
                </Grid>
                  <Content value={questions.zero}/>
                  <KButton/>
              </Grid>
            </BtnProvider>
          </Provider>
        </Grid>
      </Paper>
    </div>
  );
}
