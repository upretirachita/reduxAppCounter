import * as actionTypes from './actionsTypes';



export const saveResult = (res) => {
    //const updatedResult = 2 * res ;
    return{
        type:actionTypes.STORE_RESULT,
        result:res
    };
};

export const storeResult = (res) => {
    //return  (dispatch , getState) => 
    return  (dispatch ) => {
        setTimeout(()=>{
           // const oldCounter = getState().countRed.counter;
            //console.log("Old Counter",oldCounter);
            dispatch(saveResult(res));
        },3000)
    }
};

export const deleteResult = (reElId) => {
    return{
        type: actionTypes.DELETE_RESULT,
        resultEleId:reElId
    };
};
