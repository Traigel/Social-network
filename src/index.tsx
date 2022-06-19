import React from 'react';
import './index.css';
import {state, subscribe} from "./Redux/myState";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    addMassageCallBack,
    addPostCallBack,
    StateType,
    updateNewMessageTextCallBack,
    updateNewPostTextCallBack
} from './Redux/myState'

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <div><App state={state}
                  addPostCallBack={addPostCallBack}
                  updateNewPostTextCallBack={updateNewPostTextCallBack}
                  addMassageCallBack={addMassageCallBack}
                  updateNewMessageTextCallBack={updateNewMessageTextCallBack}/></div>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree);