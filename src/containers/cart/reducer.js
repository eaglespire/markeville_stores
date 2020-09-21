import {ADD_TO_CART} from "./constants";
import {addItemToCart} from "./utility";
import {TOTAL_PRICE_OF_CART_ITEMS} from "./constants";
import {REMOVE_FROM_CART} from "./constants";
import {deleteItemFromCart} from "../utility";
import {CLEAR_CART_AFTER_PAYMENT} from "./constants";

const initState = {
    cart:[],
    checkoutAmount:0
}

export const reducer = (state = initState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,cart:addItemToCart(state.cart,action.payload),success: true
            }
        case TOTAL_PRICE_OF_CART_ITEMS:
            return {
                ...state,
                checkoutAmount: action.payload
            }
        case REMOVE_FROM_CART:
            return {
                ...state,cart:deleteItemFromCart(state.cart,action.payload)
            }
        case CLEAR_CART_AFTER_PAYMENT:
            return {
                ...state,
                cart: [],
                checkoutAmount: 0
            }
        default:
            return state
    }

}
