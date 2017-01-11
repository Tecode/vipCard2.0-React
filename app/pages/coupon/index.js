/**
 * Created by ASSOON on 2017/1/9.
 */
import React from 'react';
import Page from '../../component/page';
import NavBarAuto from './navbar';

export default class Coupon extends React.Component{
    render(){
        return <Page className="coupon_bg">
            <NavBarAuto/>
        </Page>
    }
}