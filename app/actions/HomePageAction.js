/**
 * Created by ASSOON on 2017/2/8.
 */
import {getUserInfo,getCodeUrl} from '../dataUrl/index'
import Cookie from '../extend/cookie'
import {
    REQUEST_USERINFO,
    RECEIVE_USERINFO,
    REQUEST_CODE,
    RECEIVE_CODE,
    CHANGE_START,
    CHANGE_END
} from './actionTypes'


//开始获取用户action
export const onChangeStart = (status) => ({type: CHANGE_START,status:status});


//开始获取用户action
export const requestUserInfo = () => ({type: REQUEST_USERINFO});
//获取用户信息成功的action
export const receiveUserInfo = (json) => ({
    type: RECEIVE_USERINFO,
    posts: json,
    receivedAt: Date.now()
});

//获取二维码条形码
export const requestCode = () => ({type: REQUEST_CODE});

export const receiveCode = (res) => ({
    type: RECEIVE_CODE,
    codes: res,
    receivedAt: Date.now()
});


//获取信息，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
let fetchPosts = () => {
    return dispatch => {
        dispatch(requestUserInfo());
        return fetch(getUserInfo, {
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

//获取条形码的action
let getCode = () => {
    return dispatch => {
        dispatch(requestCode());
        return fetch(getCodeUrl, {
            method: "get",
        })
            .then(response => response.json())
            .then(json => {
                if (json.code == 0) {
                    dispatch(receiveCode(json.data));
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
export const fetchPostsIfNeeded = (type) => {
    return (dispatch) => {
        if (type == "fetchPosts") {
            return dispatch(fetchPosts());
        } else {
            return dispatch(getCode());
        }
    }
};