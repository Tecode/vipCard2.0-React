/**
 * Created by ASSOON on 2017/1/10.
 */
import React from 'react';
import classNames from 'classnames';
import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
} from '../weui_component/index';

import icon from '../pages/home/image/avatar.jpg';

const appMsgIcon = <img src={icon} />;

const ListItem = (props)=>{
    const { className, ...others } = props;
    const cls = classNames({
        [className]: className
    });
    console.info();
    return(
        <div className={cls} {...others}>
            <Panel>
                <PanelHeader>
                    礼品兑换
                </PanelHeader>
                <PanelBody>
                    <MediaBox type="appmsg" href="javascript:void(0);">
                        <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
                        <MediaBoxBody>
                            <MediaBoxTitle>Media heading Media heading Media heading</MediaBoxTitle>
                            <MediaBoxDescription>
                                <p>有效期至：2016年8月31日</p>
                                <small>剩余数量:24</small>
                                <p className="point"><span className="price">800</span><small>积分</small></p>
                                <a className="button_change" href="javascript:void(0)">兑换</a>
                            </MediaBoxDescription>
                        </MediaBoxBody>
                    </MediaBox>
                    <MediaBox type="appmsg" href="javascript:void(0);">
                        <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
                        <MediaBoxBody>
                            <MediaBoxTitle>Media heading Media heading Media heading</MediaBoxTitle>
                            <MediaBoxDescription>
                                <p>有效期至：2016年8月31日</p>
                                <small>剩余数量:24</small>
                                <p>800<small>积分</small></p>
                                <a className="button_change" href="javascript:void(0)">兑换</a>
                            </MediaBoxDescription>
                        </MediaBoxBody>
                    </MediaBox>
                </PanelBody>
                <PanelFooter href="javascript:void(0);">
                    {/*<CellMore />*/}
                </PanelFooter>
            </Panel>
        </div>
    )
};

export default ListItem