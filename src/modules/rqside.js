const GET_DATA='rqside/GET_DATA';

export const getData=(name, arr)=>{ { type:GET_DATA, name, arr} };

const initialState={
    service_name: '',
    service_arr:[],
}

export default (state=initialState, action)=>{
    switch (action.type){
        case GET_DATA:
            return {
                ...state,
                service_name: action.name,
                service_arr: action.arr,
            };
        default: return state;
    }
}