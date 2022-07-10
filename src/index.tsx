import React from 'react';
import './index.css';
import {store} from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <div><App profilePage={store.getState().profilePage}
                  dialogsPage={store.getState().dialogsPage}
                  sidebar={store.getState().sidebar}
                  dispatch={store.dispatch.bind(store)}
        />
        </div>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree);