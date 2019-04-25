const initialState = {
    counter:0, 
    results:[]
}

/*
const reducer = (state = initialState , action) =>{
    if(action.type==='INCREMENT'){
        return {
            ...state,
            counter:state.counter+1
        };
    }
    if(action.type==='DECREMENT'){
        return {
            ...state,
            counter:state.counter-1
        };
    }
    if(action.type==='INCREMENT_FIVE'){
        return {
            ...state,
            //counter:state.counter+5 if we don't pass value 
            counter:state.counter+action.value
        };
    }
    if(action.type==='DECREMENT_FIVE'){
        return {
            ...state,
            counter:state.counter-action.value
        };
    }
    return state
};
*/

const reducer = (state=initialState,action) => {
    switch (action.type){
        case 'INCREMENT':
        return {
            ...state,
            counter:state.counter+1
        }
        case 'DECREMENT':
        return {
            ...state,
            counter:state.counter-1
        }
        case 'INCREMENT_FIVE' :
        return {
            ...state,
            counter:state.counter+action.value
        }
        case 'DECREMENT_FIVE':
        return {
            ...state,
            counter:state.counter-action.value
        }
        case 'STORE_RESULT':
        return {
            ...state,
            results:state.results.concat({id:new Date(),value:state.counter})
        }
        case 'DELETE_RESULT':
        //const id = 2 ;
        //const newArray = [...state.results]
        //newArray.splice(id,1)
        const updatedArray = state.results.filter(result => result.id !== action.resultEleId)
        return {
            ...state,
           // results:newArray
           results:updatedArray

        }
    }
   return state
}


export default reducer ;