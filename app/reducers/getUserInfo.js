/**
 * Created by ASSOON on 2017/2/8.
 */
import {
    REQUEST_USERINFO,
    RECEIVE_USERINFO,
    REQUEST_CODE,
    RECEIVE_CODE
} from '../actions/actionTypes'

const initState = {
    state:'',
    listData: []
};

export default function getUserInfo(state = initState, action) {
    switch (action.type) {
        case REQUEST_USERINFO:
            return {
                state: "正在获取用户信息",
                listData: []
            };
        case RECEIVE_USERINFO:
            return {
                state: "获取用户信息成功",
                listData: action.posts
            };
        case REQUEST_CODE:
            return {...state, seconds: 0};
        case RECEIVE_CODE:
            return {...state, seconds: state.seconds + 1};
        default:
            return state
    }
}