export default function reducer(state,action){
    if(action.type === 'DELETE_ITEM'){
        return {
            ...state,
            data:state.data.filter((curr)=>{
                return curr.id !== action.payload
            })
        }
    }

    return state;
}