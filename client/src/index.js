import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import allReducers from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(
    allReducers,
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

//export default store;