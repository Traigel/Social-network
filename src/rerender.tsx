import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostCallBack, StateType} from './Redux/myState'

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <div><App state={state} addPostCallBack={addPostCallBack}/></div>,
        document.getElementById('root')
    );
}
