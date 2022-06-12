import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostCallBack, StateType, updateNewPostTextCallBack} from './Redux/myState'

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <div><App state={state}
                  addPostCallBack={addPostCallBack}
                  updateNewPostTextCallBack={updateNewPostTextCallBack}/></div>,
        document.getElementById('root')
    );
}
