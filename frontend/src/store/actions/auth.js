
import * as actionTypes from './actionTypes';
import axios from "axios";
import {apiUrl,headers} from "../../config"
import {setAlert} from "./Snackbar"

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('signIn');
    return dispatch => {
        dispatch(setAuthRedirectPath('/sign-in'));

    };
    
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (data) => {
    return dispatch => {
        axios.post(apiUrl+'/auth/sign-in',data)
        .then( response => {
            let {message } = response.data
            let status = "success";
            dispatch(setAlert({open:true,message,status}));
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('signIn', true);
            setTimeout(()=>{
                dispatch(setAuthRedirectPath('/profile'));
            },3000)
        })
        .catch( error => {
            let {message } = error.response.data
            let status = "error";
            dispatch(setAlert({open:true,message,status}));
        } );
    }
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};

export const setSignUp = (data) =>{
        return dispatch => {
            axios.post(apiUrl+'/auth/sign-up',data)
            .then( response => {
                let {message } = response.data
                let status = "success";
                dispatch(setAlert({open:true,message,status}));
                setTimeout(()=>{
                    dispatch(setAuthRedirectPath('/sign-in'));
                },3000)
            })
            .catch( error => {
                let {message } = error.response.data
                let status = "error";
                dispatch(setAlert({open:true,message,status}));
            } );
        }
    
}

export const setUserDetails = (data) => {
    return {
        type: actionTypes.SET_USER,
        user: data
    };
};
export const getUserDetails = () => {
    return dispatch => {
        axios.get(apiUrl+'/auth/user-details',headers)
        .then( response => {
            dispatch(setUserDetails(response.data.data));
        })
        .catch( error => {
            dispatch(setAuthRedirectPath('/sign-in'));
        } );
    }       
};

export const setForgotPassword = (data) =>{
    return dispatch => {
        axios.post(apiUrl+'/auth/forgot-password',data)
        .then( response => {
            let {message } = response.data
            let status = "success";
            dispatch(setAlert({open:true,message,status}));
            setTimeout(()=>{
                dispatch(setAuthRedirectPath('/sign-in'));
            },3000)
        })
        .catch( error => {
            let {message } = error.response.data
            let status = "error";
            dispatch(setAlert({open:true,message,status}));
        } );
    }

}
export const setNewPassword = (data) =>{
    let {code , password} = data;
    return dispatch => {
        axios.post(apiUrl+'/auth/reset-password/'+code,{password})
        .then( response => {
            let {message } = response.data
            let status = "success";
            dispatch(setAlert({open:true,message,status}));
            setTimeout(()=>{
                dispatch(setAuthRedirectPath('/sign-in'));
            },3000)
        })
        .catch( error => {
            let {message } = error.response.data
            let status = "error";
            dispatch(setAlert({open:true,message,status}));
        } );
    }

}

