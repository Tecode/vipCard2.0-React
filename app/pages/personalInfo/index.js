/**
 * Created by ASSOON on 2017/1/11.
 */
import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Page from '../../component/page';
import * as PersonalInfomation from '../../actions/PersonalInfomation'


const Qualifications =[
    {value:1,text:"初中"},
    {value:2,text:"高中"},
    {value:3,text:"大专"},
    {value:4,text:"本科"},
    {value:5,text:"博士及以上"},
];

const Industries =[
    {value:1,text:"互联网/电子商务"},
    {value:2,text:"计算机软件"},
    {value:3,text:"IT服务（系统/数据/集成电路）"},
    {value:4,text:"金融/银行/投资"},
    {value:5,text:"医疗/护理/美容"},
    {value:6,text:"娱乐/体育/休闲"},
    {value:7,text:"酒店餐饮"},
];


class List extends React.Component{

    componentWillMount(){
        const { fetchPostsIfNeeded } = this.props;
        fetchPostsIfNeeded();//获取用户信息
    }

    render(){
        const {data} = this.props;
        console.info(data);
        return(
            <div>
                <div className="people_info weui-flex">
                    <i className="iconfont icon-peoplefill"> </i>
                    <section className="weui-flex">
                        <div style={{flex:"35%"}}>姓名</div>
                        <div style={{flex:"65%"}} className="text-right">{data.name}</div>
                    </section>
                </div>
                <div className="people_info weui-flex">
                    <i className="iconfont icon-shouji"> </i>
                    <section className="weui-flex">
                        <div style={{flex:"35%"}}>手机</div>
                        <div style={{flex:"65%"}} className="text-right">{data.phone}</div>
                    </section>
                </div>
                <div className="people_info weui-flex">
                    <i className="iconfont icon-timefill"> </i>
                    <section className="weui-flex">
                        <div style={{flex:"35%"}}>生日</div>
                        <div style={{flex:"65%"}} className="text-right">{data.birthday}</div>
                    </section>
                </div>
                <div className="people_info weui-flex">
                    <i className="iconfont icon-youxiang1"> </i>
                    <section className="weui-flex">
                        <div style={{flex:"35%"}}>邮箱</div>
                        <div style={{flex:"65%"}} className="text-right">{data.email}</div>
                    </section>
                </div>
                <div className="people_info weui-flex">
                    <i className="iconfont icon-jiaoyuxingye"> </i>
                    <section className="weui-flex">
                        <div style={{flex:"35%"}}>学历</div>
                        <div style={{flex:"65%"}} className="text-right">{
                                Qualifications.map(elem =>{
                                    if(elem.value == data.qualification)
                                        return elem.text;
                                })
                        }</div>
                    </section>
                </div>
                <div className="people_info weui-flex">
                    <i className="iconfont icon-xingbiepianhao"> </i>
                    <section className="weui-flex">
                        <div style={{flex:"35%"}}>性别</div>
                        <div style={{flex:"65%"}} className="text-right">{data.sex ==0?"男":"女"}</div>
                    </section>
                </div>
                <div className="people_info weui-flex">
                    <i className="iconfont icon-ownedindustry"> </i>
                    <section className="weui-flex">
                        <div style={{flex:"35%"}}>行业</div>
                        <div style={{flex:"65%"}} className="text-right">{
                            Industries.map(elem =>{
                            if(elem.value == data.profession)
                            return elem.text;
                        })
                        }</div>
                    </section>
                </div>
                <div className="people_info weui-flex">
                    <i className="iconfont icon-likefill"> </i>
                    <section className="weui-flex">
                        <div style={{flex:"35%"}}>爱好</div>
                        <div style={{flex:"65%"}} className="text-right">{data.hobby}</div>
                    </section>
                </div>
                <div className="people_info weui-flex">
                    <i className="iconfont icon-locationfill"> </i>
                    <section className="weui-flex">
                        <div style={{flex:"35%"}}>地址</div>
                        <div style={{flex:"65%"}} className="text-right">{data.address}</div>
                    </section>
                </div>
            </div>

        )
    }
}


class PersonalInfo extends React.Component{
    render(){
        const { personalInfoMation, actions } = this.props;
        return(
            <Page>
                <List {...actions} {...personalInfoMation}/>
            </Page>
        )
    }
}


const mapStateToProps = state => ({
    personalInfoMation: state.personalInfoMation,//获取用户信息
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(PersonalInfomation, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalInfo)