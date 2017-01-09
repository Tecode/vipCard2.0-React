/**
 * Created by ASSOON on 2017/1/2.
 */
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../node_modules/antd-mobile/dist/antd-mobile.css';
import './font_icon/iconfont.css';
import FastClick from 'fastclick';
import Page from './index';

const  { Home } = Page;

class App extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                style={{height: '100%'}}
            >
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </ReactCSSTransitionGroup>
        );
    }
}

window.addEventListener('load',() =>{
    FastClick.attach(document.body);
},false);

render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>),document.getElementById('app'));