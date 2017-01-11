/**
 * Created by ASSOON on 2017/1/11.
 */
import React from 'react';
import classNames from 'classnames';

const PeopleInfo = (props) =>{
    const { className, children, ...others } = props;
    const cls = classNames({
        [className]: className,
    });

    return (
        <div className={cls} {...others}>
            <i className={others.data.icon}> </i>
            <section className="weui-flex">
                <div style={{flex:"35%"}}>{others.data.tittle}</div>
                <div style={{flex:"65%"}} className="text-right">{others.data.variable}</div>
            </section>
        </div>
    );
};

export default PeopleInfo;
