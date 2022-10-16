import React, {Suspense} from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Redirect, Route} from "react-router-dom";
import {NewsContainer} from './components/News/News';
import {MusicContainer} from './components/Music/Music';
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from './components/login/Login';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setInitializedAppTC} from "./Redux/app-reducer";
import {AppStateType} from "./Redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import {ProfileContainer} from './components/Profile/ProfileContainer';

// @ts-ignore
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component<AppPropsType> {

    catchAllUnhandledErrors = (promise: Promise<any>) => {
        alert("Some error occurred")
        console.log(promise)
    }

    componentDidMount() {
        this.props.setInitializedAppTC()
        // @ts-ignore
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        // @ts-ignore
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
                <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => {
                    return <Suspense fallback={<Preloader/>}>
                        <DialogsContainer/>
                    </Suspense>
                }}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <NewsContainer/>}/>
                <Route path='/music' render={() => <MusicContainer/>}/>
            </div>
        </div>
    }
}

type AppPropsType = mapDispatchToPropsTye & mapStateToPropsType

type mapStateToPropsType = {
    initialized: boolean
}

type mapDispatchToPropsTye = {
    setInitializedAppTC: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
    return {
        setInitializedAppTC: () => dispatch(setInitializedAppTC())
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
