import React, {Component} from 'react';
import ReactDOM from 'react-dom';
/* import './css/index.css';
import './css/bootstrap.css'; */

/* import Button from 'react-bootstrap/Button'; */

import Container from './questions/container'
/* import questions from './questions/questions'; */

export default class Index extends Component{
    render(){
        return(
            <div className="main">
                <Container/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);


