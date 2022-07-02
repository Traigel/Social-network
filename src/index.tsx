import React from 'react';
import './index.css';
import {store} from "./Redux/myState";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <div><App state={store.getState()}
                  addPostCallBack={store.addPostCallBack.bind(store)}
                  updateNewPostTextCallBack={store.updateNewPostTextCallBack.bind(store)}
                  addMassageCallBack={store.addMassageCallBack.bind(store)}
                  updateNewMessageTextCallBack={store.updateNewMessageTextCallBack.bind(store)}/></div>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree);