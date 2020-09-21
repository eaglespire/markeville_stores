import {
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_LOADING,
    FETCH_PRODUCT_SUCCESS
} from "../product/constants";
import axios from "axios";
import {baseUrl} from "../utility";

const fetchProductLoading = ()=>{
    return {
        type:FETCH_PRODUCT_LOADING
    }
}

const fetchProductSuccess = product => {
    return {
        type:FETCH_PRODUCT_SUCCESS,
        payload:product
    }
}

const fetchProductError = err => {
    return {
        type:FETCH_PRODUCT_ERROR,
        payload:err
    }
}


export const fetchSingleProduct = id=>{
    return dispatch =>{
        /*
        Make an async call with the id params
        to the server to retrieve the single product
        Before then, first dispatch a product loading
        action
         */
        dispatch(fetchProductLoading())
        axios.get(`${baseUrl}/api/products/${id}`)
            .then(res=>{
                dispatch(fetchProductSuccess(res.data.data))
            })
            .catch(err => {
                dispatch(fetchProductError(err))
            })
    }
}


