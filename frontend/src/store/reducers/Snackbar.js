import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    data:{
        open:false,
        status:"success",
        message:"This is a success message!"
    },
};
const setAlert = (state, action) => {
    return updateObject( state, {
        data: action.data,
    } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_ALERT: return setAlert(state, action);    
        default: return state;
    }
};

export default reducer;