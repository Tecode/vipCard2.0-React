/**
 * Created by ASSOON on 2017/1/10.
 */

import React from 'react';
import classNames from 'classnames';

const Container = (props) =>{
    const { className, children, ...others } = props;
    const cls = classNames({
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export default Container;