/**
 * Created by ASSOON on 2017/2/8.
 */
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../actions/actionTypes'

export default function home(state = 0, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}