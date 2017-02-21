/**
 * Created by ASSOON on 2017/2/8.
 */

import { combineReducers } from 'redux'
import getUserInfo from './home/getUserInfo'
import getCode from './home/getCode'
import changeCode from './home/changeCode'
import personCenterIfo from './personCenter/personCenterIfo'
import personalInfoMation from './personalInfo/index'


const rootReducer = combineReducers({
    getUserInfo,
    getCode,
    changeCode,
    personCenterIfo,
    personalInfoMation
});

export default rootReducer;
