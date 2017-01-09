/**
 * Created by ASSOON on 2017/1/3.
 */
import React from 'react';
import './index.less';
import Page from '../../component/page';
import avatar from './image/avatar.jpg'
import QCodde from './image/QR_code.png'
import {
    Flex,
    FlexItem
} from '../../weui_component/index';


class Hearder extends React.Component {
    render() {
        return (
            <header className="home_nav weui-flex">
                <figure>
                    <img src={avatar} style={{width: '100%'}}/>
                </figure>
                <section>
                    <div className="text_box weui-flex">
                        <div>
                            <div>名字：2551</div>
                            <div>会员卡余额：25</div>
                        </div>
                    </div>
                    <div className="button_box weui-flex">
                        <button className="weui-btn weui-btn_mini weui-btn_warn">签到</button>
                    </div>
                </section>
            </header>
        )
    }
}

class QRCode extends React.Component{
    render(){
        return(
            <div className="code_toggle weui-flex">
                <section>
                    <img src={QCodde} alt="扫码" width={'100%'} />
                </section>
            </div>
        )
    }
}

class HomeMenu extends React.Component{
    render(){
        return(
            <div className="flex home_menu">
                <Flex>
                    <FlexItem>
                        <a href="#/recharge" className="flex_box" style={{backgroundColor:'#00a8ff',marginRight:'.1rem'}}>
                            <i className="iconfont">&#xe6ed;</i>
                            <div className="placeholder">充值</div>
                        </a>
                    </FlexItem>
                    <FlexItem>
                        <a href="#/coupon" className="flex_box" style={{backgroundColor:'#ff9b34',marginLeft:'.1rem'}}>
                            <i className="iconfont">&#xe607;</i>
                            <div className="placeholder">优惠券</div>
                        </a>
                    </FlexItem>
                </Flex>
                <Flex>
                    <FlexItem>
                        <a href="#/personalCenter" className="flex_box" style={{backgroundColor:'#00c688',marginRight:'.1rem'}}>
                        <i className="iconfont">&#xe690;</i>
                        <div className="placeholder">个人中心</div>
                        </a>
                    </FlexItem>
                    <FlexItem>
                        <a href="#/pointsMall" className="flex_box" style={{backgroundColor:'#ff448d',marginLeft:'.1rem'}}>
                        <i className="iconfont">&#xe676;</i>
                        <div className="placeholder">积分商城</div>
                        </a>
                    </FlexItem>
                </Flex>
                <Flex>
                    <FlexItem>
                        <a className="flex_box" style={{backgroundColor:'#1aad19'}}>
                        <i className="iconfont">&#xe676;</i>
                        <div className="placeholder">微信商城</div>
                        </a>
                    </FlexItem>
                </Flex>
            </div>
        )
    }
}

export  default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "6666"
        };
    }

    render() {
        return (
            <Page>
                <div className="home_outbox weui-flex">
                    <Hearder/>
                    <QRCode/>
                    <HomeMenu/>
                </div>
            </Page>
        )
    }

}