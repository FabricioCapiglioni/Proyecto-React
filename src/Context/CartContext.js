import { useState, createContext } from 'react'


export const CartContext = createContext();


export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    /* const [quantity, setQuantity] = useState(0) */
    

    const isInCart = (itemId) => {
        let isIn = false
        isIn = cart.some((product) => product.id === itemId) 
        console.log(`el item esta en el carrito: ${isIn}`)
        return isIn
    };

    const addItem = (item, quantityAdded) => {

        
        if (isInCart(item.id)) {

            const upDateCart = cart.map((prod) => {
                if(prod.id === item.id){
                    const newQuantity = prod.quantity + quantityAdded 
                    console.log(newQuantity)
                    return {
                        ...prod,
                        quantity: newQuantity
                    }
                }

                return prod
            }) 
            
            setCart([upDateCart]);

            console.log(`hola es la 2da vez`)
            console.log(cart)

          } else {

            console.log('el item no estaba en el carrito')

            const newItem = { 'quantity': quantityAdded, ...item}
            
            console.log(newItem)

            setCart([...cart, newItem]);
            console.log('cart es igual a:')
            console.log(cart)
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
        <CartContext.Provider value={{ addItem, removeItem, clearCart, cart }}>
            {children}
        </CartContext.Provider>
    )
}


