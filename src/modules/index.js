import { combineReducers } from "redux";
import osType from './osType';
import breadCrumb from './breadCrumb';

const rootReducer = combineReducers({
    // store 만들고 넣기
    osType,
    breadCrumb,
})

export default rootReducer;