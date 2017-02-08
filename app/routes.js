/**
 * Created by ASSOON on 2017/2/8.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Pages from './index';

const {
    Home, Recharge, Coupon, PersonalCenter,
    PointsMall, VipInterest, MyBill, IntegrationDetails,
    ExchangeRecords, PersonalInfo
} = Pages;

class App extends React.Component {
    constructor(props) {
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

class NoMatch extends React.Component {
    render() {
        return <Link to="/" component={NoMatch}>返回首页</Link>
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/recharge" component={Recharge}/>
        <Route path="/coupon" component={Coupon}/>
        <Route path="/personalCenter" component={PersonalCenter}/>
        <Route path="/VipInterest" component={VipInterest}/>
        <Route path="/MyBill" component={MyBill}/>
        <Route path="/IntegrationDetails" component={IntegrationDetails}/>
        <Route path="/ExchangeRecords" component={ExchangeRecords}/>
        <Route path="/PersonalInfo" component={PersonalInfo}/>
        <Route path="/pointsMall" component={PointsMall}/>
        <Route path="*" component={NoMatch}/>
    </Route>
);