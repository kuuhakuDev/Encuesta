import React, { useContext, useEffect  } from 'react';
import Typography from '@material-ui/core/Typography';
import {AppContext, questions} from '../questions'

export default function Title() {

    const [state, setState] = useContext(AppContext);
    

    return (
        <Typography variant="h4" gutterBottom align="center">
            Encuesta sobre servicios de paginas web
        </Typography>
    )
}
  