
export const addItemToCart = (cartItems,product)=>{
    const existingProduct = cartItems.find(item => item.id === product.id)
    if (existingProduct){
        return cartItems.map(item =>
            item.id === product.id
            ? {...product,quantity: item.quantity + 1}
            : item
        )
    }
     return [...cartItems,{...product,quantity: 1}]
}

