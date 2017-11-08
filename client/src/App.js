import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Page imports
import Landing from './components/Landing';
import NewTask from './components/NewTask';
import ProviderHome from './components/ProviderHome';

class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/newTask' component={NewTask} />
                    <Route exact path='/providerHome' component={ProviderHome} />
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
