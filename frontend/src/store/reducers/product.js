import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    products: [],
    error: false,
    count:0,
    building: false
};
const setProduct = (state, action) => {
    return updateObject( state, {
        products: action.products.data,
        count:action.products.count,
        error: false,
        building: false
    } );
};

const fetchProductFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_PRODUCT: return setProduct(state, action);    
        case actionTypes.FETCH_PRODUCT_FAILED: return fetchProductFailed(state, action);
        default: return state;
    }
};

export default reducer;