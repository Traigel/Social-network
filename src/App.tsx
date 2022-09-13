import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Setting/Setting';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from './components/login/Login';
import {connect} from "react-redux";
import {setAuthUserDateTC} from "./Redux/auth-reducer";
import {Dispatch} from "redux";

class App extends React.Component {

    componentDidMount() {

    }

    render() {
        return <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                    <Route path='/messages' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    }
}

type mapDispatchToPropsTye = {
    setAuthUserDateTC: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
    return {
        setAuthUserDateTC: () => dispatch(setAuthUserDateTC())
    }
}

export const AppContainer = connect(null, mapDispatchToProps)(App);
