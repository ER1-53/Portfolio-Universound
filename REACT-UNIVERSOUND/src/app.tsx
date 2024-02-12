import React from 'react';
import LandingPage from './pages/landingPage/landingPage';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import SoundPage from './pages/soundPage/soundPage';
import SignUp from './pages/userLogPage/signuppage/signup';
import LoginPage from './pages/userLogPage/loginpage/login';
import PageNotFound from './pages/pageNotFound/pageNotFound';
import Header from './components/header/headerLog';
import styles from './app.module.css'

const App = () => {
  return (
    <Router>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/songpage" component={SoundPage}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={LoginPage}/>
                <Route component={PageNotFound}/>
            </Switch>
    </Router>
  );
};

export default App;
