import './Cart.css'
import CartList from '../CartList/CartList'
import { useContext } from "react";
import {CartContext} from "../../Context/CartContext";


const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
            <div>
                <h1>Cart</h1>       
                <main>
                    <CartList cart={cart} />
                </main>        
                    
            </div>
            
    )
}

export default Cart