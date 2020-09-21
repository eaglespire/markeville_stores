import {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    LOG_OUT,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS
} from "./constants";

const initState = {
    user:{},
    token: null,
    isAuthenticated:false,
    error:null
}

export const reducer = (state = initState,action) => {
    switch(action.type){
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                user: {},
                isAuthenticated: false,
                token:null,
                error:null
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
