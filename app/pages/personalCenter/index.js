/**
 * Created by ASSOON on 2017/1/9.
 */
import React from 'react';
import Page from '../../component/page';
import {connect} from 'react-redux'

import {bindActionCreators} from 'redux'
import * as PersonCenter from '../../actions/PersonCenter'
import {Footer, FooterLink, FooterLinks, FooterText, Cells, Cell, CellBody, CellFooter} from '../../weui_component/index';
import { Link } from 'react-router';


const menus = [
    {tittle:"积分兑换记录",link:'/ExchangeRecords',icon:"iconfont icon-newshot"},
    {tittle:"积分明细",link:'/IntegrationDetails',icon:"iconfont icon-recharge"},
    {tittle:"我的账单",link:'/MyBill',icon:"iconfont icon-form"},
    {tittle:"会员权益",link:'/VipInterest',icon:"iconfont icon-crown"},
    {tittle:"个人信息",link:'/PersonalInfo',icon:"iconfont icon-people"},
];

class CardInfo extends React.Component{

    componentWillMount(){
        const { fetchPostsIfNeeded } = this.props;
        fetchPostsIfNeeded();
    }

    render(){
        const { data } =this.props;
        //个人中心的样式在home里面
        return(
            <div className="person_center">
                <section className="bg_img weui-flex">
                    <div className="person_box weui-flex">
                        <figure>
                            <img src={data.wximg} alt="头像" width={'100%'} />
                        </figure>
                        <section className="weui-flex">
                            <div>
                                <h5>{data.wxname}</h5>
                                <small>总积分 {data.totalscore}</small>
                            </div>
                        </section>
                    </div>
                    <ul className="footer_info weui-flex">
                        <li>
                            <h5>{data.currentscore}</h5>
                            <small>可用积分</small>
                        </li>
                        <li>
                            <h5>￥{data.wxyue}</h5>
                            <small>可用金额</small>
                        </li>
                        <li>
                            <h5>{data.cardcount}</h5>
                            <small>优惠券</small>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

class List extends React.Component{
    render(){
        return(
            <div className="list_mu">
                <Cells>
                    {menus.map((item, j)=>(
                        <Cell key={j} component={Link} to={item.link} access>
                            <i className={item.icon}> </i>
                            <CellBody>
                                {item.tittle}
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                    ))}
                </Cells>
            </div>
        )
    }
}


class PersonalCenter extends React.Component{

    render(){
        const { personCenterIfo,actions } = this.props;

        return (
            <Page>
                <CardInfo {...personCenterIfo} {...actions} />
                <List/>
                <Footer className="fix_footer">
                    <FooterLinks>
                        <FooterLink href="javascript:void(0);">快办商户通</FooterLink>
                    </FooterLinks>
                    <FooterText>Copyright &copy; 2015-2017</FooterText>
                </Footer>
            </Page>
        )
    }
}

const mapStateToProps = state => ({
    personCenterIfo: state.personCenterIfo,//获取用户信息
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(PersonCenter, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalCenter)