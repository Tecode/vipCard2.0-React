/**
 * Created by ASSOON on 2017/1/11.
 */
import React from 'react';
import Page from '../../component/page';
import PeopleInfo from './peopleInfo';


const items =[
    {icon:'iconfont icon-peoplefill',tittle:'姓名',variable:'李素敏'},
    {icon:'iconfont icon-phone',tittle:'手机号码',variable:'13655874558'},
    {icon:'iconfont icon-timefill',tittle:'生日',variable:'1052-54-10'},
    {icon:'iconfont icon-peoplefill',tittle:'邮箱',variable:'254778774@qq.com'},
    {icon:'iconfont icon-peoplefill',tittle:'学历',variable:'小学'},
    {icon:'iconfont icon-peoplefill',tittle:'性别',variable:'女'},
    {icon:'iconfont icon-peoplefill',tittle:'行业',variable:'互联网/金融'},
    {icon:'iconfont icon-peoplefill',tittle:'爱好',variable:'吃饭/睡觉/打游戏旅游'},
    {icon:'iconfont icon-peoplefill',tittle:'地址',variable:'重庆市渝北区然间吧145号后晌123号'}];

export default class PersonalInfo extends React.Component{
    render(){
        return(
            <Page>
                {
                    items.map((item,i) =>(
                        <PeopleInfo key={i} data={item} className="people_info weui-flex"/>
                    ))
                }
            </Page>
        )
    }
}
