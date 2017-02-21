/**
 * Created by ASSOON on 2017/2/21.
 */

import {
    REQUEST_PERSONAL,
    RECEIVE_PERSONAL
} from '../../actions/actionTypes'

export default function personCenterIfo(state = {state: "获取用户中心信息",data: "5",
}, action) {
    switch (action.type) {
        case REQUEST_PERSONAL:
            return {
                state: "正在获取获取用户中心信息",
                data: "5"
            };
        case RECEIVE_PERSONAL:
            return {
                state: "获取用户中心信息结束",
                data: action.data
            };
        default:
            return state
    }
}