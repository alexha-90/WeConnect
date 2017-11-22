import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

// Page imports
import Header from './components/Header'
import Landing from './components/Landing';
import NewTask from './components/NewTask';
import AvailableTasks from './components/AvailableTasks';
import ProviderHome from './components/ProviderHome';
import ReviewNewTask from "./components/ReviewNewTask";

class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/newTask' component={NewTask} />
                    <Route exact path='/reviewNewTask' component={ReviewNewTask} />
                    <Route exact path='/availableTasks' component={AvailableTasks} />
                    <Route exact path='/providerHome' component={ProviderHome} />
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default connect(null, actions)(App);