import {
    FETCH_PRODUCT_LOADING,
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_SUCCESS
} from "./constants";

const initState = {
    product:{},
    isLoading:false,
    error:null
}

export const reducer = (state = initState,action) => {
    switch (action.type) {
        case FETCH_PRODUCT_LOADING:
            return {
                ...state,isLoading: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload,
                isLoading: false
            }
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}