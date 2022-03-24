const SERVICE='breadCrumb/SERVICE';
const CATEGORY='breadCrumb/CATEGORY';
const MENUARR='breadCrumb/MENUS'

export const setService = (service, serviceName) => ({ 
    type: SERVICE, 
    service, 
    serviceName,
});
export const setCategory = (category, categoryName) => ({
     type: CATEGORY, 
     category, 
     categoryName,
    });
export const setMenuArr = (menu) => ({
    type:MENUARR,
    menu,
})

const initialState= {
    service:0,
    service_name:'',
    category:0,
    category_name:'',
    menus:[],
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SERVICE:
            return {
                ...state,
                service: action.service,
                service_name: action.serviceName,
            }
        case CATEGORY:
            return {
                ...state,
                category: action.category,
                category_name: action.categoryName,
            }
            case MENUARR:
                return {
                    ...state,
                    menus: [
                        ...action.menu,
                    ]
                }
        default:
            return state;
    }
}