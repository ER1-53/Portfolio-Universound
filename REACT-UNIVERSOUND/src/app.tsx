import React from 'react';
import LandingPage from './pages/landingPage/landingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SoundPage from './pages/soundPage/soundPage';
import SignUp from './pages/userLogPage/signuppage/signup';
import LoginPage from './pages/userLogPage/loginpage/login';
import PageNotFound from './pages/pageNotFound/pageNotFound';
import LikePage from './pages/likePage/likePage';
import Playlist from './pages/playlist/playlist';
import PrivateRoute from './PrivateRoute';
import RenewHaskPage from './pages/userLogPage/haskpassword/renewHaskPassword';
import RenewPassPage from './pages/userLogPage/haskpassword/renewPassword';
import UpSong from './pages/soundPage/newSong';

const App = () => {
  return (
    <Router>
            <Switch>
              {/* Landing page */}
                <Route exact path="/" component={LandingPage}/>
              {/* Private routes */}
                <PrivateRoute path="/songpage" component={SoundPage}/>
                <PrivateRoute path="/likePage" component={LikePage}/>
                <PrivateRoute path="/playlist" component={Playlist}/>
              {/* Public routes */}
                <Route path="/signup" component={SignUp}/>
                <Route path="/renewPage" component={RenewHaskPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/newSong" component={UpSong}/>
                <Route path="/renewPassPage/:token" component={RenewPassPage}/>
              {/* 404 page */}
                <Route component={PageNotFound}/>
            </Switch>
    </Router>
  );
};

export default App;
