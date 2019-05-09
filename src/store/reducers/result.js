import * as actionTypes from '../actions/actionsTypes';
import {updatedObject} from '../utility';

const initialState = {
    results:[]
}

const deleteResult = (state, action ) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultEleId);
    return updatedObject(state,{results:updatedArray})
};

const reducer = (state=initialState,action) => {
    switch (action.type){
        
        case actionTypes.STORE_RESULT:
        return updatedObject(state,{results:state.results.concat({id:new Date(),value:action.result})})
      
        case actionTypes.DELETE_RESULT:
        return deleteResult(state,action)
           
    }
   return state
}


export default reducer ;