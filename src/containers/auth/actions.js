import {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    LOG_OUT,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR
} from './constants'
import axios from 'axios'
import  {baseUrl} from "../constant";

const fetchUserSuccess = (user,token) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload:{
            user:user,
            token:token
        }
    }
}

const fetchUserError = err => {
    return {
        type: FETCH_USER_ERROR,
        payload: err
    }
}

const registerUserSuccess = (user,token) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload : {
            user,token
        }
    }
}

const registerUserError = err => {
    return {
        type: REGISTER_USER_ERROR,
        payload : err
    }
}

export const fetchUser = data => {
    return dispatch => {
        axios.post(`${baseUrl}login`,data)
            .then(res => {
                console.log(res)
                dispatch(fetchUserSuccess(res.data.user,res.data.token))
                localStorage.setItem('token',res.data.token)
            })
            .catch(err => {
                console.log(err)
                const msg = 'Invalid login credentials'
               // console.log(err.data.message)
                dispatch(fetchUserError(msg))
            })
    }
}

export const registerUser = data => {
    return dispatch => {
        axios.post(`${baseUrl}register`,data)
            .then(res => {
                console.log(res)
                dispatch(registerUserSuccess(res.data.user,res.data.token))
            })
            .catch(err => {
                console.log(err)
                const msg = 'Invalid login credentials';
                // console.log(err.data.message)
                dispatch(registerUserError(msg))
            })
    }
}

export const logoutUser = () => {
    return {
        type: LOG_OUT
    }
}