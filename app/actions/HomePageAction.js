/**
 * Created by ASSOON on 2017/2/8.
 */
import fetch from 'isomorphic-fetch'

import {
    REQUEST_USERINFO,
    RECEIVE_USERINFO,
    REQUEST_CODE,
    RECEIVE_CODE
} from './actionTypes'


//开始获取用户action
export const requestUserInfo = Parameters => ({type: REQUEST_USERINFO, Parameters});
//获取用户信息成功的action
export const receiveUserInfo = (Parameters, json) => ({
    type: RECEIVE_USERINFO,
    reddit: Parameters,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
});

export const requestCode = () => ({type: REQUEST_CODE});

export const receiveCode = () => ({type: RECEIVE_CODE});


//获取文章，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
let fetchPosts = reddit => {
    return dispatch => {
        dispatch(requestUserInfo(reddit));
        return fetch(`https://www.reddit.com/r/reactjs.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveUserInfo(25, json)))
    }
};

//开始获取用户信息
export const fetchPostsIfNeeded = Parameters => {
    return (dispatch, getState) => {
        return dispatch(fetchPosts(Parameters));
    }
};