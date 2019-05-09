import * as actionTypes from './actionsTypes';


export const increment = () => {
    return{
        type:actionTypes.INCREMENT
    };
};
export const decrement = () => {
    return{
        type:actionTypes.DECREMENT 
    };
};

export const incrementFive = (value) => {
    return{
        type:actionTypes.INCREMENT_FIVE,
        value:value
    };
};

export const decrementFive = (value) => {
    return{
        type:actionTypes.DECREMENT_FIVE,
        value:value
    };
};