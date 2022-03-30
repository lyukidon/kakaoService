import { combineReducers } from "redux";
import osType from './osType';
import breadCrumb from './breadCrumb';
import query from './query';
import side from './side';

const rootReducer = combineReducers({
    // store 만들고 넣기
    osType,
    breadCrumb,
    query,
    side,
})

export default rootReducer;