/**
 * Created by ASSOON on 2017/2/21.
 */

import {
    CHANGE_START,
} from '../../actions/actionTypes'

export default function changeCode(state = {state: "切换准备", status: "0"}, action) {
    switch (action.type) {
        case CHANGE_START:
            console.info(action);
            return {
                ...state,state:"切换成功",status:state.status == 0?1:0
            };
        default:
            return state
    }
}