/**
 * Created by ASSOON on 2017/1/11.
 */
import React from 'react';
import Page from '../../component/page';
import Interest from './interest'
import heardimage from './image/vip_info.jpg';

export default class VipInterest extends React.Component{
    render(){
        return(
            <Page>
                <figure>
                    <img src={heardimage} alt="介绍" width={'100%'} />
                </figure>
                {/*样式在home文件夹inde.less文件*/}
                <Interest className="vip_interest"/>
            </Page>
        )
    }
}
