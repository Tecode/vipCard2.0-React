/**
 * Created by ASSOON on 2017/2/21.
 */

import { getPersonCenterInfo } from '../dataUrl/index'

import {
    REQUEST_PERSONAL,
    RECEIVE_PERSONAL
} from './actionTypes'



//开始获取用户action
export const requestUserInfo = () => ({type: REQUEST_PERSONAL});

//获取用户信息成功的action
export const receiveUserInfo = (json) => ({
    type: RECEIVE_PERSONAL,
    data: json,
    receivedAt: Date.now()
});



//获取信息，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
let fetchPosts = () => {
    return dispatch => {
        dispatch(requestUserInfo());
        return fetch( getPersonCenterInfo, {
            method: "get",
        })
            .then(response => response.json())
            .then(json => {
                if (json.code == 0) {
                    dispatch(receiveUserInfo(json));
                } else {
                    alert(json.msg);
                }
            })
            .catch(err => {
                // alert(err);
            })
    }
};


//开始获取用户信息
export const fetchPostsIfNeeded = () => {
    return (dispatch) => { dispatch(fetchPosts())    }
};