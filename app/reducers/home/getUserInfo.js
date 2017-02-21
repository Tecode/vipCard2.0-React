/**
 * Created by ASSOON on 2017/2/8.
 */
import {
    REQUEST_USERINFO,
    RECEIVE_USERINFO,
} from '../../actions/actionTypes'

export default function getUserInfo(state = {state: '', userInfo: ''}, action) {
    switch (action.type) {
        case REQUEST_USERINFO:
            return {
                state: "正在获取用户信息",
                userInfo: '',
            };
        case RECEIVE_USERINFO:
            return {
                state: "获取用户信息成功",
                userInfo: action.posts,
            };
        default:
            return state
    }
};


