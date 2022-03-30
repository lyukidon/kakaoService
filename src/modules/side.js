const SET='side/SET';

export const setSide=data=>({type:SET, data});

const initialState={
    service:undefined,
    name:'',
    category:[],
}

export default (state=initialState, action)=>{
    switch (action.type) {
        case SET:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
}