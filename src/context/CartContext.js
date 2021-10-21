import { useState, createContext } from 'react'


export const CartContext = createContext();


export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [buyer, setBuyer] = useState()
    
    const isInCart = (itemId) => {
        return cart.some((product) => product.id === itemId) 
    };

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
    };

    const getTotalCount = () => {
        let totalItems = 0
        cart.forEach(prod => {
            totalItems = totalItems + prod.quantity
        })
        return totalItems
    }
    
    const changeQty = (item, count) => {
        const upDateCart = cart.map(prod => {
            if(prod.id === item.id){
                const upDateProduct = {
                    ...prod,
                    quantity: parseInt(count)
                } 
                return upDateProduct
            }
            return prod
        })  
        setCart(upDateCart);
    }

    const addItem = (item, quantityAdded) => {
        if (isInCart(item.id)) {
            const upDateCart = cart.map(prod => {
                if(prod.id === item.id){
                    let newQuantity = prod.quantity + quantityAdded;
                    console.log(newQuantity)
                    const upDateProduct = {
                        ...prod,
                        quantity: parseInt(newQuantity)
                    } 
                    return upDateProduct
                }
                return prod
            })  
            setCart(upDateCart);
          } else {
            const newItem = { quantity: quantityAdded, ...item}
            setCart([...cart, newItem]);
        }        
    }

    const removeItem = (id) => {

        const newCart = cart.filter( (prod) => prod.id !== id)

        setCart(newCart)
    }

    const clearCart = () => {

        setCart([])
    }
    
    return(
        <CartContext.Provider value={{ addItem, removeItem, clearCart, cart, buyer, setBuyer, getTotal, changeQty, getTotalCount }}>
            {children}
        </CartContext.Provider>
    )
}


