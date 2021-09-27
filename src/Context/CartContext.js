import React, { useState } from 'react'


const CartContext = React.createContext();


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    

    /* const isInCart = (itemId) => {
        
        const isIn = cart.some(product => product.id === itemId);
        /* console.log(isIn)
        return isIn; 
        
    }; */


    const addItem = (item, quantityAdded) => {

        let isIn = false;
        
        isIn = cart.some(product => product.id === item.id);

        console.log(isIn)
        
        if (isIn) {

            const itemInCart = cart.filter(prod => prod.id === item.id);

            const newQuantity = itemInCart.quantity + quantity
            const upDateCart = cart.map(prod => (prod.id === item.id ? {'quantity': newQuantity, ...prod} : {prod} ))
            
            setCart(upDateCart);

            console.log(`hola es la 2da vez`)

          } else {

            const newItem = { 'quantity': quantityAdded, ...item}
            
            

            setCart(cart.push(newItem));
            console.log('cart')
            console.log(cart)
        }        
    }
    
    return(
        <CartContext.Provider value={{ addItem, setQuantity }}>
            {children}
        </CartContext.Provider>
    )


}


export default CartContext;