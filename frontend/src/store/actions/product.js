import * as actionTypes from './actionTypes';
import axios from "axios";
import {apiUrl,headers} from "../../config"

import {setAlert} from "./Snackbar"

export const setProduct = ( products ) => {
    return {
        type: actionTypes.SET_PRODUCT,
        products: products
    };
};

export const fetchProductFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_FAILED
    }
};

export const getProduct = (data) => {
    let page =typeof data.page!=="undefined"?data.page: 1;
    let search = typeof data.search!=="undefined"?data.search:"";
    return dispatch => {
        axios.get(apiUrl+`/product/product-list/?page=${page}&search=${search}`,headers)
        .then( response => {
            dispatch(setProduct(response.data.data));

        })
        .catch( error => {
            dispatch(fetchProductFailed());
        } );
    }

            
};
export const addProduct = (data) => {
    return dispatch => {
        let {product_name, category_id,id}=data

        if(id){
            axios({
                method: 'put',
                url: apiUrl+'/product/update-product/'+id,
                headers:{ "token":localStorage.getItem("token"),
                }, 
                data:{
                    product_name,category_id
                },
              }).then( response => {
                dispatch(setAlert({open:true,message:response.data.message,status:"success"}));

                dispatch(getProduct({page:1,search:""}));
             } )
            .catch( error => {
                dispatch(setAlert({open:true,message:error.response.data.message,status:"error"}));
                dispatch(fetchProductFailed());
            } );

        }else{

            axios({
                method: 'post',
                url: apiUrl+'/product/add-product',
                headers:{ "token":localStorage.getItem("token"),
                }, 
                data:{
                    product_name,category_id
                },
            }).then( response => {
                dispatch(setAlert({open:true,message:response.data.message,status:"success"}));
                dispatch(getProduct({page:1,search:""}));
             } )
            .catch( error => {
                dispatch(setAlert({open:true,message:error.response.data.message,status:"error"}));
                dispatch(fetchProductFailed());
            } );

        }
        
    }
};
export const deleteProduct = (id) => {
    return dispatch => {
        axios({
            method: 'delete',
            url: apiUrl+'/product/delete-product/'+id,
            headers:{ "token":localStorage.getItem("token"),
            }, 
           
          }).then( response => {
            dispatch(setAlert({open:true,message:response.data.message,status:"success"}));
            dispatch(getProduct({page:1,search:""}));
        } )
        .catch( error => {
            dispatch(setAlert({open:true,message:error.response.data.message,status:"error"}));
            dispatch(fetchProductFailed());
        } );
    }
};