// using an ES6 transpiler, like babel

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './font_icon/iconfont.css';
import 'weui';
import "babel-polyfill";

import FastClick from 'fastclick';
import Pages from './index';

const  { Home, Recharge, Coupon, PersonalCenter,
         PointsMall, VipInterest, MyBill, IntegrationDetails,
    ExchangeRecords, PersonalInfo} = Pages;

class App extends React.Component{
    constructor(props){
        super(props);
    }
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

class NoMatch extends React.Component{
    render(){
        return <Link to="/" component={NoMatch}>返回首页</Link>
    }
}

class User extends React.Component{
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
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/recharge" component={Recharge} />
            <Route path="/coupon" component={Coupon} />
            <Route path="/personalCenter" component={PersonalCenter} />
                <Route path="/VipInterest" component={VipInterest}/>
                <Route path="/MyBill" component={MyBill}/>
                <Route path="/IntegrationDetails" component={IntegrationDetails}/>
                <Route path="/ExchangeRecords" component={ExchangeRecords} />
                <Route path="/PersonalInfo" component={PersonalInfo} />
            <Route path="/pointsMall" component={PointsMall} />
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('app'));