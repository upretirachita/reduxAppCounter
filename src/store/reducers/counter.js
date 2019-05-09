import * as actionTypes from '../actions/actionsTypes';
import {updatedObject} from '../utility';

const initialState = {
    counter:0
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
/* WITHOUT USING UTILITY.JS
const reducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.INCREMENT:
        return {
            ...state,
            counter:state.counter+1
        }
        case actionTypes.DECREMENT:
        return {
            ...state,
            counter:state.counter-1
        }
        case actionTypes.INCREMENT_FIVE :
        return {
            ...state,
            counter:state.counter+action.value
        }
        case actionTypes.DECREMENT_FIVE:
        return {
            ...state,
            counter:state.counter-action.value
        }
        
    }
   return state
}
*/

//With utility.js
const reducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.INCREMENT:
        return updatedObject(state,{counter:state.counter+1})
       
        case actionTypes.DECREMENT:
        return updatedObject(state,{counter:state.counter-1})

        case actionTypes.INCREMENT_FIVE :
        return updatedObject (state, {counter:state.counter+action.value})

        case actionTypes.DECREMENT_FIVE:
        return updatedObject (state, {counter:state.counter-action.value})
        
    }
   return state
}


export default reducer ;