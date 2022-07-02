import React from 'react';
import './index.css';
import {store} from "./Redux/myState";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <div><App state={store.getState()}
                  dispatch={store.dispatch.bind(store)}
        />
        </div>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree);