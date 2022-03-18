const SERVICE='breadCrumb/SERVICE';
const CATEGORY='breadCrumb/CATEGORY';



export const setService = (service) => ({ type: SERVICE, service});
export const setCategory = (category) => ({ type: CATEGORY, category});

const initialState= {
    service:'',
    category:'',
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SERVICE:
            return {
                ...state,
                service: action.service,
            }
        case CATEGORY:
            return {
                ...state,
                category: action.category,
            }
        default:
            return state;
    }
}