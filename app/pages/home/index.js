/**
 * Created by ASSOON on 2017/1/3.
 */
import React, {Component, PropTypes} from 'react'
import './index.less'
import Page from '../../component/page'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as HomePageAction from '../../actions/HomePageAction'

import {
    Flex,
    FlexItem
} from '../../weui_component/index';


class Hearder extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { fetchPostsIfNeeded } = this.props;
        fetchPostsIfNeeded('fetchPosts');//获取用户信息
        fetchPostsIfNeeded('getCode');//获取条形码和二维码
    }

    render() {
        const {userInfo} = this.props;
        return (
            <header className="home_nav weui-flex">
                <figure>
                    <img src={userInfo.wximg} style={{width: '100%'}}/>
                </figure>
                <section>
                    <div className="text_box weui-flex">
                        <div>
                            <h4>名字：{userInfo.wxname}</h4>
                            <small>会员卡余额：{userInfo.wxyue}</small>
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


class QRCode extends Component {

    handleClick = (status) => {
        this.props.onChangeStart(status)
    };

    render() {
        const {codes, status} = this.props;
        let code = () =>{
            if (status==0){
                return <img src={codes.qrcode} alt="扫码" width={'100%'}/>
            }else {
                return <div>
                    <img src={codes.barcode} alt="扫码" width={'100%'}/>
                    <p className="text-center">{codes.codes}</p>
                </div>
            }
        };
        return (
            <div className="code_toggle weui-flex">
                <section>
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="page"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        style={{height: '100%'}}
                    >
                        { code() }
                    </ReactCSSTransitionGroup>
                    <p className="text-center">
                        <small>两分钟后自动刷新<a href="javascript:void (0)">(立即刷新)</a></small>
                    </p>
                </section>
                <div className="toggle_button weui-flex">
                    <i className="iconfont" onClick={ () => this.handleClick(status) }>&#xe66c;</i>
                </div>
            </div>
        )
    }
}

class HomeMenu extends Component {
    render() {
        return (
            <div className="flex home_menu">
                <Flex>
                    <FlexItem>
                        <a href="#/recharge" className="flex_box"
                           style={{backgroundColor: '#00a8ff', marginRight: '.1rem'}}>
                            <i className="iconfont">&#xe6ec;</i>
                            <div className="placeholder">充值</div>
                        </a>
                    </FlexItem>
                    <FlexItem>
                        <a href="#/coupon" className="flex_box"
                           style={{backgroundColor: '#ff9b34', marginLeft: '.1rem'}}>
                            <i className="iconfont" style={{}}>&#xe7bc;</i>
                            <div className="placeholder">优惠券</div>
                        </a>
                    </FlexItem>
                </Flex>
                <Flex>
                    <FlexItem>
                        <a href="#/personalCenter" className="flex_box"
                           style={{backgroundColor: '#00c688', marginRight: '.1rem'}}>
                            <i className="iconfont">&#xe77a;</i>
                            <div className="placeholder">个人中心</div>
                        </a>
                    </FlexItem>
                    <FlexItem>
                        <a href="#/pointsMall" className="flex_box"
                           style={{backgroundColor: '#ff448d', marginLeft: '.1rem'}}>
                            <i className="iconfont">&#xe697;</i>
                            <div className="placeholder">积分商城</div>
                        </a>
                    </FlexItem>
                </Flex>
                <Flex>
                    <FlexItem>
                        <a className="flex_box" style={{backgroundColor: '#1aad19'}}>
                            <i className="iconfont">&#xe6b9;</i>
                            <div className="placeholder">微信商城</div>
                        </a>
                    </FlexItem>
                </Flex>
            </div>
        )
    }
}

class Home extends Component {

    render() {
        const {getUserInfo, getCode, changeCode, actions} = this.props;
        return (
            <Page>
                <div className="home_outbox weui-flex">
                    <Hearder {...getUserInfo} {...actions} />
                    <QRCode {...getCode} {...changeCode} {...actions} />
                    <HomeMenu />
                </div>
            </Page>
        )
    }

}


const mapStateToProps = state => ({
    getUserInfo: state.getUserInfo,//获取基本用户信息
    getCode: state.getCode,//获取二维码条形码
    changeCode: state.changeCode//切换二维码和条形码
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(HomePageAction, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
