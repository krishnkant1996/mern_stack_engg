import * as actionTypes from './actionTypes';
export const setAlert = ( data ) => {
    return {
        type: actionTypes.SET_ALERT,
        data: data
    };
};

