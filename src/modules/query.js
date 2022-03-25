const QUERY='query/QUERY';

export const setQuery=(data)=>(
    {type: QUERY, data}
)

const initialState={
	service:undefined,
	category: undefined,
	platform: 0,
	articleId: undefined,
}

export default (state=initialState, action)=>{
	switch (action.type){
		case QUERY:
			return {
				...state,
				...action.data,
			}
        default:
            return state;
	}
}
