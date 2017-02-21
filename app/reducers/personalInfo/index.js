/**
 * Created by ASSOON on 2017/2/21.
 */

import {
    REQUEST_PERSONAL_INFO,
    RECEIVE_PERSONAL_INFO
} from '../../actions/actionTypes'

export default function personalInfoMation(state = {state: "获取用户信息",data: "",
}, action) {
    switch (action.type) {
        case REQUEST_PERSONAL_INFO:
            return {
                state: "正在获取获取用户信息",
                data: "5"
            };
        case RECEIVE_PERSONAL_INFO:
            return {
                state: "获取用户结束",
                data: action.data
            };
        default:
            return state
    }
}