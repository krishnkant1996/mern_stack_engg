import * as actionTypes from './actionTypes';
import axios from "axios";
import {apiUrl,headers} from "../../config"


export const setCategory = ( category ) => {
    return {
        type: actionTypes.SET_CATEGORY,
        category: category
    };
};

export const fetchCategoryFailed = () => {
    return {
        type: actionTypes.FETCH_CATEGORY_FAILED
    }
};

export const getCategory = () => {
    return dispatch => {
        axios.get(apiUrl+'/category/categoryList',headers)
        .then( response => {
            dispatch(setCategory(response.data.data));

        })
        .catch( error => {
            dispatch(fetchCategoryFailed());
        } );
    }
            
};
