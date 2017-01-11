/**
 * Created by ASSOON on 2017/1/11.
 */
import React from 'react';
import CouponItem from './coupon';
import { Tab, NavBarItem, Article } from '../../weui_component/index';

export default class NavBarAuto extends React.Component {
    render() {
        return (
            <Tab type="navbar">
                <NavBarItem label="可用优惠券">
                    <CouponItem className="coupon"/>
                </NavBarItem>
                <NavBarItem label="历史优惠券">
                    <Article>
                        <h1>Page 2</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>2.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                </NavBarItem>
            </Tab>
        );
    }
};
