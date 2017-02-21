/**
 * Created by ASSOON on 2017/2/21.
 */

import { getPersonalInfo } from '../dataUrl/index'

import {
    REQUEST_PERSONAL_INFO,
    RECEIVE_PERSONAL_INFO
} from './actionTypes'



//开始获取用户action
export const requestUserInfo = () => ({type: REQUEST_PERSONAL_INFO});

//获取用户信息成功的action
export const receiveUserInfo = (json) => ({
    type: RECEIVE_PERSONAL_INFO,
    data: json,
    receivedAt: Date.now()
});



//获取信息，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
let fetchPosts = () => {
    return dispatch => {
        dispatch(requestUserInfo());
        return fetch( getPersonalInfo, {
            method: "get",
        })
            .then(response => response.json())
            .then(json => {
                if (json.code == 0) {
                    dispatch(receiveUserInfo(json.data));
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