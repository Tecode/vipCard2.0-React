/**
 * Created by ASSOON on 2017/1/9.
 */
import React from 'react';
import Container from '../../component/container';
import ListItem from '../../component/listitem';
import './index.less';
import Page from '../../component/page';
import {
    InfiniteLoader,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter
} from '../../weui_component/index';

import t_img from './image/t_img.jpg';


class PointUser extends React.Component{
    render(){
        return(
            <Container className="point_nav weui-flex">
                <small className="exchange">我的兑换记录</small>
                <section className="card_box weui-flex">
                    <div>
                        <figure>
                            <img src={t_img} width={'100%'} alt="头像" />
                        </figure>
                        <span>黄金会员</span>
                    </div>
                </section>
                <CardFooter/>
            </Container>
        )
    }
}

class CardFooter extends React.Component{
    render(){
        return(
            <section className="weui-flex info">
                <div>
                    <h4>5221</h4>
                    <small>可用积分</small>
                </div>
                <div>
                    <h4>5221</h4>
                    <small>全部积分</small>
                </div>
            </section>
        )
    }
}

class Infinite extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            items: [...Array(20).keys()]
        }
    }

    render(){
        return (
            <InfiniteLoader
                onLoadMore={ (resolve, finish) => {
                    //mock request
                    setTimeout( ()=> {
                        if(this.state.items.length > 22){
                            finish()
                        }else{
                            this.setState({
                                items: this.state.items.concat([this.state.items.length])
                            }, ()=> resolve())
                        }
                    }, 1000)
                }}
            >
                <Page className="infinite" title="Infinite Loader" subTitle="滚动加载" >

                    <CellsTitle>List with 22 Max</CellsTitle>
                    <Cells>
                        {
                            this.state.items.map( (item, i) => {
                                return (
                                    <Cell href="javascript:;" key={i} access>
                                        <CellBody>
                                            {item}
                                        </CellBody>
                                        <CellFooter/>
                                    </Cell>
                                )
                            })
                        }
                    </Cells>

                </Page>
            </InfiniteLoader>
        )
    }
}


export default class PointsMall extends React.Component{
    render(){
        return (
            <Page>
                <PointUser/>
                {/*<Infinite/>*/}
                <ListItem className="list_style_line4" />
            </Page>
        )
    }
}
