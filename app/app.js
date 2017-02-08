// using an ES6 transpiler, like babel

import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import './font_icon/iconfont.css';
import 'weui';
import "babel-polyfill";
import Root from './container/Root';

import FastClick from 'fastclick';

const store = configureStore(window.__INITIAL_STATE__);




window.addEventListener('load', () => {
    FastClick.attach(document.body);
}, false);



class User extends React.Component {
    componentDidMount() {
        this.setState({
            // route components are rendered with useful information, like URL params
            user: findUserById(this.props.params.userId)
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.user.name}</h2>
            </div>
        )
    }
}

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
    <Root store={store} history={browserHistory}/>
), document.getElementById('app'));