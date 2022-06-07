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
import {StateType} from "./index";

type ArrType = {
    state: StateType
}

const App = (props: ArrType) => {
    return <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={()=><Profile profilePage={props.state.profilePage}/>}/>
                <Route path='/messages' render={()=><Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path='/news' render={()=><News/>} />
                <Route path='/music' render={()=><Music/>} />
                <Route path='/settings' render={()=><Settings/>} />
                <Route path='/users' render={()=><Users/>} />
            </div>
        </div>
    </BrowserRouter>
};

export default App;
