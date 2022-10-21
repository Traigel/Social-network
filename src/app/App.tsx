import React from 'react';
import styles from "./App.module.scss";
import {Redirect, Route} from "react-router-dom";
import {NewsContainer} from '../features/News/News';
import {MusicContainer} from '../features/Music/Music';
import {UsersContainer} from "../features/Users/UsersContainer";
import {HeaderContainer} from "../features/Header/HeaderContainer";
import {LoginContainer} from '../features/login/Login';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setInitializedAppTC} from "./app-reducer";
import {AppStateType} from "./redux-store";
import {Preloader} from "../common/components/Preloader/Preloader";
import {ProfileContainer} from '../features/Profile/ProfileContainer';
import DialogsContainer from '../features/Dialogs/DialogsContainer';

// const DialogsContainer = React.lazy(() => import('../features/Dialogs/DialogsContainer'));

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

        return <div>
            <HeaderContainer/>
            <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
            <Route path='/login' render={() => <LoginContainer/>}/>

            <main className={styles.appContainer}>
                <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <NewsContainer/>}/>
                <Route path='/music' render={() => <MusicContainer/>}/>

                {/*<Route path='/messages' render={() => {*/}
                {/*    return <Suspense fallback={<Preloader/>}>*/}
                {/*        <DialogsContainer/>*/}
                {/*    </Suspense>*/}
                {/*}}/>*/}
            </main>
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
