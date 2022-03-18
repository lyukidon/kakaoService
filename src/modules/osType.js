const SET_OS= 'osType/SET_OS';

export const setOS= os => ({
        type:SET_OS,
        os
    })

const initialState = 0;

export default (state = initialState, action)=>{
    switch (action.type){
        case SET_OS :
            return action.os; // 1. setOS의 os에서 데이터를 받아온다. 2. 여기서 받아온 os값을 리턴한다.
        default:
            return state;
    }
}