import './Cart.css'
import CartList from '../CartList/CartList'
import { useContext, useState, useEffect } from "react";
import {CartContext} from "../../context/CartContext";
import { Link } from 'react-router-dom';


const Cart = () => {
    const [total, setTotal] = useState(0)
    const { cart, clearCart, getTotal, getTotalCount } = useContext(CartContext)

    useEffect (() =>{
        setTotal(getTotal())
    },[getTotal, cart])

    return (
            <div>
                <h1>Cart</h1>       
                <main>
                {cart.length !== 0 ? (
                    <>
                        <CartList cart={cart} />
                        <div className="checkOut">
                            <div className="add row col-sm-8">
                                <div className="address col-sm-6">
                                    <button id="btnFormAddress" type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        Shipping address
                                    </button>
                                </div>  
                                <div className="total col-sm-6">
                                    <p> Total ({getTotalCount()} items) </p>
                                    <p> $ {total} </p>
                                </div>
                            </div>
                        </div>
                        <div className="buttonsCheckOut">
                            <button className="btn btn-danger me-md-4" type="button" onClick={() => clearCart()}>Clear</button>
                            <button className="btn btn-primary me-md-4" type="button">Continuar</button>
                        </div>
                        
                    </>
                    ) : 
                    (
                    <div className="tienda__cartNoElements">
                        <p>Your cart is empty</p>
                        <Link to="/">Back to main</Link>
                    </div>
                )}
                </main>        
                    
            </div>
            
    )
}

export default Cart