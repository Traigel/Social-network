import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostCallBack, state} from './Redux/myState'

ReactDOM.render(
    <div><App state={state} addPostCallBack={addPostCallBack}/></div>,
    document.getElementById('root')
);