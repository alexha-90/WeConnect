import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

// Page imports
import Header from './components/Header'
import Landing from './components/Landing';
import NewContentPost from './components/NewContentPost';
import AvailableTasks from './components/AvailableTasks';
import ReviewNewContentPost from './components/ReviewNewContentPost';
import Profile from './components/Profile';
import ProducerProfile from './components/ProducerProfile';
import AdvertiserProfile from './components/AdvertiserProfile';
import ContentCreatorsList from './components/ContentCreatorsList';
import AdvertisersList from './components/AdvertisersList';

class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/ContentCreatorsList' component={ContentCreatorsList} />
                    <Route exact path='/advertisersList' component={AdvertisersList} />
                    <Route exact path='/newContentPost' component={NewContentPost} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/advertiserProfile' component={AdvertiserProfile} />
                    <Route exact path='/producerProfile' component={ProducerProfile} />
                    <Route exact path='/reviewNewTask' component={ReviewNewContentPost} />

                    {/* temporary file below*/}
                    <Route exact path='/availableTasks' component={AvailableTasks} />

                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default connect(null, actions)(App);