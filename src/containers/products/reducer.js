import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_LOADING,
    FETCH_ALL_PRODUCTS_SUCCESS
} from "./constants";

const initState = {
    products:[],
    all:[],
    isLoading:false,
    error:null
}


export const reducer = (state = initState,action)=>{
    switch (action.type) {
        case FETCH_PRODUCTS_LOADING:
            return {
                ...state,isLoading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                isLoading: false
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FETCH_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                all: action.payload,
                isLoading: false
            }
        default:
            return state
    }

}
