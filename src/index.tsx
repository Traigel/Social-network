import React from 'react';
import './index.css';
import {store} from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from './App';
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
    ,
    document.getElementById('root')
);