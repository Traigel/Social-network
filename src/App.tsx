import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Setting/Setting';
import { Users } from './components/Users/Users';
import { Dialogs } from './components/Dialogs/Dialogs';

const App = () => {
    return <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' component={Profile} />
                <Route path='/messages' component={Dialogs} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
                <Route path='/users' component={Users} />
            </div>
        </div>
    </BrowserRouter>
};

export default App;
