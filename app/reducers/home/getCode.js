/**
 * Created by ASSOON on 2017/2/21.
 */
import {
    REQUEST_CODE,
    RECEIVE_CODE
} from '../../actions/actionTypes'

export default function getCode(state = {state: "正在获取二维码", codes: ""}, action) {
    switch (action.type) {
        case REQUEST_CODE:
            return {
                state: "正在获取二维码",
                codes: ""
            };
        case RECEIVE_CODE:
            return {
                state: "获取二维码成功",
                codes: action.codes
            };
        default:
            return state
    }
}