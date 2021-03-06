import React from 'react';
import './index.less';
import Page from '../../component/page';
import avatar from './image/avatar.jpg';
import {
    Flex,
    FlexItem
} from '../../weui_component/index';

const prices = [
    {prices: [20, 30, 50]},
    {prices: [100, 200, 300]},
    {prices: [500, 1000, "其它数额"]}];

class Button extends React.Component {
    render() {
        return (
            <div style={{margin: "2rem .5rem 0 .5rem"}}>
                <button className="top_up_button">充值</button>
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        return (
            <section className="vip_cardbox">
                <div className="vip_card weui-flex">
                    <section className="info weui-flex">
                        <figure>
                            <img src={avatar} alt="头像" width={'100%'}/>
                        </figure>
                        <div className="weui-flex">
                            <section>
                                <h4>乖猫猫</h4>
                                <small>卡内余额：300</small>
                            </section>
                        </div>
                    </section>
                    <section className="weui-flex text_discrip">
                        <p>会员卡号NO.1456996</p>
                    </section>
                </div>
            </section>
        )
    }
}

class Price extends React.Component {
    render() {
        const {Tittle, Discrip} = this.props;//解构赋值
        return (
            <section>
                <div className="price_tittle">
                    <span className="md_tittle">{Tittle}</span>
                    <span>
                        <small style={{color: "#ff5e5e"}}>{Discrip}</small>
                    </span>
                </div>
                <section className="price_button flex">
                    {
                        prices.map((price, i) => (
                            <Flex key={i}>
                                {
                                    price.prices.map((elem, i) => (
                                        <FlexItem key={i}>
                                            <div className="price_boxbutton">
                                                <a href="javascript:void(0);">
                                                    {elem}
                                                    {/*<small>元</small>*/}
                                                </a>
                                            </div>
                                        </FlexItem>
                                    ))
                                }
                            </Flex>
                        ))
                    }
                </section>
                <Tip/>
                <Button/>
            </section>
        )
    }
}

class Tip extends React.Component {
    render() {
        return (
            <p style={{marginLeft: ".5rem", marginTop: ".6rem"}}>
                <small>微信支付：</small>
                <span style={{color: "#ff8a11"}}>20元</span>
            </p>
        )
    }
}

export default class Recharge extends React.Component {
    render() {
        return (
            <Page>
                <Card/>
                <Price Tittle="充值金额" Discrip="充值有礼，点此参与>>"/>
            </Page>
        )
    }
};