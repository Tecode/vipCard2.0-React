import React from 'react';
import Page from '../../component/page';
import BillList from '../../component/detailList'

export default class MyBill extends React.Component{
    render(){
        return(
            <Page>
                <BillList/>
            </Page>
        )
    }
}