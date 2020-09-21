import axios from 'axios'
import {ADD_TO_CART} from "./constants";
import {TOTAL_PRICE_OF_CART_ITEMS} from "./constants";
import {REMOVE_FROM_CART} from "./constants";
import {CLEAR_CART_AFTER_PAYMENT} from "./constants";
import {baseUrl} from "../constant";

const addCart = item=>{
    return {
        type:ADD_TO_CART,
        payload:item
    }
}

const totalPriceOfCartItems = totalPrice => {
    return {
        type:TOTAL_PRICE_OF_CART_ITEMS,
        payload:totalPrice
    }
}

const removeFromCart = id=>{
    return {
        type:REMOVE_FROM_CART,
        payload:id
    }
}
const clearCartAfterPayment = () => {
    return {
        type: CLEAR_CART_AFTER_PAYMENT,
    }
}



export const addToCart = (id)=>{
    return dispatch=>{
        //make your calls
        axios.get('https://storeapi.markeville.com/api/products/' + id)
            .then(res=>{
                console.log(res.data.data)
                dispatch(addCart(res.data.data))
            })
            .catch(err=>{
                console.log(err)
            })
    }
}

/*
This function which is an action creator gets the total price of the items
in the cart.
Recall that we have created a utility function , getTotalAmount that calculates
the total amount and that function takes as a second parameter,
an action to be dispatched from our component . The action gets the
calculated price as an argument
this action parameter that the utility function receives is being mapped
to the props of the component using mapPropsToState
and this prop in turn then calls a dispatch which then executes
our totalPriceCartItems function
 */
export const totalPriceCartItems = (price)=>{
    return dispatch =>{
        dispatch(totalPriceOfCartItems(price))
    }
}

export const removeItemFromCart = id=>{
    return dispatch =>{
        dispatch(removeFromCart(id))
    }
}

export const clearOutCart = () => {
    return dispatch => {
        dispatch(clearCartAfterPayment())
    }
}