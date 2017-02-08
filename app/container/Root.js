/**
 * Created by ASSOON on 2017/2/7.
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';


const Root = ({ store, history }) => (
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
);

export default Root