/**
 * Created by ASSOON on 2017/1/9.
 */
import React from 'react';
import Page from '../../component/page';
import avatar from './image/avatar.jpg';
import {Footer, FooterLink, FooterLinks, FooterText, Cells, Cell, CellBody, CellFooter} from '../../weui_component/index';
import { Link } from 'react-router';


const menus = [
    {tittle:"积分兑换记录",link:'/redemptionRecords',icon:"iconfont icon-newshot"},
    {tittle:"积分明细",link:'/redemptionRecords',icon:"iconfont icon-recharge"},
    {tittle:"我的账单",link:'/redemptionRecords',icon:"iconfont icon-form"},
    {tittle:"会员权益",link:'/redemptionRecords',icon:"iconfont icon-crown"},
    {tittle:"个人中心",link:'/redemptionRecords',icon:"iconfont icon-people"},
];

class CardInfo extends React.Component{
    render(){
        //个人中心的样式在home里面
        return(
            <div className="person_center">
                <section className="bg_img weui-flex">
                    <div className="person_box weui-flex">
                        <figure>
                            <img src={avatar} alt="头像" width={'100%'} />
                        </figure>
                        <section className="weui-flex">
                            <div>
                                <h5>菲儿vip1</h5>
                                <small>总积分 9864</small>
                            </div>
                        </section>
                    </div>
                    <ul className="footer_info weui-flex">
                        <li>
                            <h5>8658</h5>
                            <small>可用积分</small>
                        </li>
                        <li>
                            <h5>￥658</h5>
                            <small>可用积分</small>
                        </li>
                        <li>
                            <h5>5</h5>
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


export default class PersonalCenter extends React.Component{
    render(){
        return (
            <Page>
                <CardInfo />
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