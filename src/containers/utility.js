export const baseUrl = 'https://storeapi.markeville.com'

export const getSomeProducts = (count,arr)=>{
    //first obtain a copy of the array
    const newArr = arr.slice(arr)
    const tmp = []

    for(let i = 0; i< count; i++ ){
        let index = Math.floor(Math.random() * newArr.length)
        const remArr = newArr.splice(index,1)
        //Since I am only removing one element
        tmp.push(remArr[0])
    }
    return tmp
}

/*
 What this utility function does is simply to calculate the total
 amount to be paid for all the products in the cart
 it takes in the array of items in the cart as argument
 it also takes in a function which will be dispersed to the reducer
 to update the checkoutAmount piece of state in the cart substate
 the actionToDispatch function gets the total amount as an argument
 the moment this outer function is executed
 the value of this function will be the props of the component
 in which this getTotalAmount is called
 for example---- actionToDispatch = props.totalPriceOfCartItems
 */
export const getTotalAmount = (arr,actionToDispatch)=>{
    var total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i].quantity * arr[i].product_price
    }
    actionToDispatch(total)
    return total;
}


/*
This utility function calculates the total number of items
added to the cart
 */
export const getTotalUnitsAdded = arr=>{
    var total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i].quantity
    }
    return total
}

/*
    This utility function simply deletes an item from an
    it takes an array as an argument and the id of the item to remove
    as a second argument
 */

export const deleteItemFromCart = (arr,id) => {
    return arr.filter(item => item.id !== id)
}

/*
This function checks if an object
is empty
 */
export function isEmpty(obj){
    for(var key in obj){
        if (obj.hasOwnProperty(key))
            return false
    }
    return true
}

/*
This utility function splits an array
into chunks
 */
export function chunkArray(arr,n){
    var chunkLength = Math.max(arr.length/n ,1);
    var chunks = [];
    for (var i = 0; i < n; i++) {
        if(chunkLength*(i+1)<=arr.length)chunks.push(arr.slice(chunkLength*i, chunkLength*(i+1)));
    }
    return chunks;
}