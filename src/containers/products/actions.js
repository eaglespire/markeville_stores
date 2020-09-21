import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_LOADING,
    FETCH_ALL_PRODUCTS_SUCCESS
} from "./constants";
import axios from 'axios'
import {getSomeProducts} from "../utility";
import {baseUrl} from "../utility";

const fetchProductsLoading = ()=>{
    return {
        type:FETCH_PRODUCTS_LOADING
    }
}

const fetchProductsError = (err)=>{
    return {
        type:FETCH_PRODUCTS_ERROR,
        payload:err
    }
}

const fetchProductsSuccess = (products)=>{
    return {
        type:FETCH_PRODUCTS_SUCCESS,
        payload:products
    }
}

const fetchAllProductsSuccess = products => {
    return {
        type: FETCH_ALL_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProducts = ()=>{
    return dispatch=>{
        dispatch(fetchProductsLoading())
        axios.get(baseUrl + '/api/products')
            .then(res=>{
                console.log(res)
                console.log(typeof res.data) // is an object
                console.log(typeof res.data.data) // is an object
                const retArr = getSomeProducts(9,res.data.data)
                console.log(retArr)
                dispatch(fetchProductsSuccess(retArr))
            })
            .catch(err=>{
                console.log(err)
                dispatch(fetchProductsError(err))
            })
    }
}

export const fetchAllProducts = ()=>{
    return dispatch=>{
        //dispatch(fetchProductsLoading())
        axios.get(baseUrl + '/api/products')
            .then(res=>{
                dispatch(fetchAllProductsSuccess(res.data.data))
            })
            .catch(err=>{
                console.log(err)
                dispatch(fetchProductsError(err))
            })
    }
}


