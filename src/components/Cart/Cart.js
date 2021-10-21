import './Cart.css'
import CartList from '../CartList/CartList'
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import NotificationContext from '../../context/NotificationContext'
import { newOrder } from '../../assets/Services/firebase/firebase';
import { Link } from 'react-router-dom';



const Cart = () => {
    const [total, setTotal] = useState(0)
    const { cart, clearCart, getTotal, buyer, setBuyer, getTotalCount} = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    useEffect (() =>{
        setTotal(getTotal())

    },[getTotal, cart])

    const buy = () => {

        if (buyer === undefined) {
            setNotification("error", "You must complete the shipping form to complete the order", 10000)   
        } else {
            setNotification("spinner", "Processing Order", 2000) 
            const order = {
                buyer: buyer,
                items: cart,
                total: total
            }
            
            newOrder(order).then( message => {
                setNotification('check', message, 4000)
            }).catch(error => {
                setNotification('error', error, 2000)
            }).finally(() => {
                clearCart()
                setTotal(0)
                setBuyer()
            })
        }
    }
    
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

                                    {buyer === undefined ?
                                    <>
                                    <Link  to="/shipping">
                                        <button type="button" className="btn btn-primary">
                                            Shipping Form
                                        </button>
                                    </Link>
                                    </>
                                    :
                                    <>
                                    <h4>Name: {buyer.name} </h4>
                                    <h4>Address: {buyer.street} </h4>
                                    <Link  to="/shipping">
                                        <button type="button" className="btn btn-primary" onClick={() => setBuyer()}>
                                            Edit
                                        </button>
                                    </Link>
                                    </>
                                    }
                                </div>  
                                <div className="total col-sm-6">
                                    <p> Total ({getTotalCount()} items) </p>
                                    <p> $ {total} </p>
                                </div>
                            </div>
                        </div>
                        <div className="buttonsCheckOut">
                            <button className="btn btn-danger me-md-4" type="button" onClick={() => clearCart()}>Clear</button>
                            
                            <button className="btn btn-primary me-md-4" type="button" onClick={() => buy()}>Buy</button>
                            
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