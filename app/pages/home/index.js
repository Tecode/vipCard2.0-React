/**
 * Created by ASSOON on 2017/1/3.
 */
import React from 'react';
import './index.less';

class Hearder extends React.Component{
    render(){
        return{

        }
    }
}

export  default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: "6666"
        };
    }



    render(){
        return(
            <p onClick={this.handleClick.bind(this,this.state.color)}>47</p>
        )
    }

    handleClick = e =>{
        alert(e);
    }

}