/**
 * Created by ASSOON on 2017/2/8.
 */
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    INCREMENT_ASYNC
} from './actionTypes'

export const increment = () => ({ type: INCREMENT_COUNTER });

export const decrement = () => ({ type: DECREMENT_COUNTER });

export const onIncrementAsync = () => ({ type: INCREMENT_ASYNC });