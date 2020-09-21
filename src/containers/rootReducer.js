import {combineReducers} from "redux";
import {reducer as ProductReducer} from './product/reducer'
import {reducer as ProductsReducer} from "./products/reducer";
import {reducer as CartReducer} from "./cart/reducer"
import {reducer as AuthReducer} from './auth/reducer'
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart','auth']
}


const rootReducer = combineReducers({
    products:ProductsReducer,
    cart:CartReducer,
    product:ProductReducer,
    auth:AuthReducer
});
export default persistReducer(persistConfig,rootReducer)
