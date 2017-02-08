/**
 * Created by ASSOON on 2017/1/11.
 */
import React from 'react';
import classNames from 'classnames';
import w_bg from './image/bg_img.png';
import couponBlue from './image/coupon-blue.png';

const CouponItemBlue = (props) =>{
    const { className, children, ...others } = props;
    const cls = classNames({
        [className]: className,
    });

    return (
        <div className={cls} {...others}>
            <section className="weui-flex coupon-box">
                <h4 className="vip_text vip_text_blue">VIP专享</h4>
                <div className="img_bg">
                    <img src={w_bg} height={"100px"}/>
                </div>
                <div className="content weui-flex">
                    <section className="weui-flex">
                        <div>
                            <h3>优惠券</h3>
                            <p>满199使用</p>
                        </div>
                    </section>
                    <section className="weui-flex" style={{flex:1}}>
                        <div>
                            <h1 className="up_down" style={{color:'#00b7f0'}}>8.5折优惠</h1>
                            <small style={{color:'#00ace2'}}>有效期至2016-12-12</small>
                        </div>
                    </section>
                </div>
                <div className="color_bg weui-flex">
                    <div style={{backgroundColor:'#fff',flex:'1'}}></div>
                    <img src={couponBlue} height={"100px"}/>
                    <div className="button_get">
                        <a className="blue_button" href="javascript:void (0)">
                            立即领取
                        </a>
                        <small className="text-center">剩余24张</small>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CouponItemBlue;