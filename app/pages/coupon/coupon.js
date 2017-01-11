/**
 * Created by ASSOON on 2017/1/11.
 */
import React from 'react';
import classNames from 'classnames';
import w_bg from './image/bg_img.png';
import couponRed from './image/coupon-red.png';

const CouponItem = (props) =>{
    const { className, children, ...others } = props;
    const cls = classNames({
        [className]: className,
    });

    return (
        <div className={cls} {...others}>
            <section className="weui-flex coupon-box">
                <div className="img_bg">
                    <img src={w_bg} height={"110px"}/>
                </div>
                <div className="content weui-flex">
                    <section>
                        <h2>VIP专享</h2>
                        <h3>优惠券</h3>
                        <p>满199使用</p>
                    </section>
                    <section>
                        <h1>减10元</h1>
                        <p>有效期至2016-12-12</p>
                    </section>
                </div>
                <div className="color_bg weui-flex">
                    <div style={{backgroundColor:'#fff',flex:'1'}}></div>
                    <img src={couponRed} height={"110px"}/>
                    <div className="button_get">
                        <a href="javascript:void (0)">
                            立即领取
                        </a>
                        <small className="text-center">剩余24张</small>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CouponItem;