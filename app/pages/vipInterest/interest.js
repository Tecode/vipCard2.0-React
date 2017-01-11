/**
 * Created by ASSOON on 2017/1/11.
 */
import React from 'react';
import classNames from 'classnames';

const Interest = (props) =>{
    const { className, children, ...others } = props;
    const cls = classNames({
        [className]: className,
    });

    return (
        <div className={cls} {...others}>
            <section className="weui-flex">
                <div style={{flex:"35%"}} className="tittle">
                    <i className="iconfont icon-noticefill"/>
                    <span>特权说明</span>
                </div>
                <div style={{flex:"65%"}}>
                    激活成功即赠送100积分<br/>
                    每消费1.00元，赠送10积分<br/>
                    单次赠送上限1000积分<br/>
                    每使用1积分，抵扣1.00元<br/>
                    用卡可享受9折优惠<br/>
                    （仅作示例）<br/>
                    1.每消费1元积10分；<br/>
                    2.激活送100积分；<br/>
                    3.本会员卡享受5折优惠；<br/>
                    4.使用卡券买单可以享受消费积分</div>
            </section>
        </div>
    );
};

export default Interest;