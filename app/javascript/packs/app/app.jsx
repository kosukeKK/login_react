import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';
import * as axios from 'axios';

render(
    <Provider store={store}>
        <App name="React"/>
    </Provider>,
    document.getElementById('root'),
);
