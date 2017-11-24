import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

// Page imports
import Header from './components/Header'
import Landing from './components/Landing';
import NewTask from './components/NewTask';
import AvailableTasks from './components/AvailableTasks';
import ProviderSignUp from './components/ProviderSignUp';
import ReviewNewTask from './components/ReviewNewTask';
import Profile from './components/Profile';
import ViewProviderProfile from './components/ViewProviderProfile';
import ViewTask from './components/ViewTask';

class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/newTask' component={NewTask} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/ViewTask' component={ViewTask} />
                    <Route exact path='/providerProfile' component={ViewProviderProfile} />
                    <Route exact path='/reviewNewTask' component={ReviewNewTask} />
                    <Route exact path='/availableTasks' component={AvailableTasks} />
                    <Route exact path='/providerSignUp' component={ProviderSignUp} />
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default connect(null, actions)(App);