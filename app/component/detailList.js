/**
 * Created by ASSOON on 2017/1/12.
 */
import React from 'react';

const DetailList = (props) =>{
    const { className, children, ...others } = props;

    return (
        <div className="detail_list weui-flex" {...others}>
            <section>
                <p>今天</p>
                <p>12:00</p>
            </section>
            <i className="iconfont icon-cart"/>
            <div>
                <p>门店消费<span style={{fontSize:'1.3em',color:'#00a7ff'}}>+20</span>积分</p>
                <p>可用积分 20</p>
            </div>
        </div>
    );
};

export default DetailList;
