import { combineReducers } from "redux";
import osType from './osType';
import breadCrumb from './breadCrumb';
import query from './query'

const rootReducer = combineReducers({
    // store 만들고 넣기
    osType,
    breadCrumb,
    query,
})

export default rootReducer;