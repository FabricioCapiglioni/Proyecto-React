import './Cart.css'
import CartList from '../CartList/CartList'
import { useContext, useState, useEffect } from "react";
import { collection, addDoc, getDoc, doc , Timestamp, writeBatch } from 'firebase/firestore'
import {CartContext} from "../../context/CartContext";
import {db} from '../../assets/Services/firebase/firebase'
import { Link } from 'react-router-dom';
import { Confirmation, Processing, Error } from './AlertsBuy/AlertsBuy';

const Cart = () => {
    const [total, setTotal] = useState(0)
    const [checking, setChecking] = useState(false)
    const [confirmed, setConfirmed] = useState(false)
    const [error, setError] = useState(false)
    const { cart, clearCart, getTotal, getTotalCount } = useContext(CartContext)

    useEffect (() =>{
        setTotal(getTotal())
    },[getTotal, cart])


    const buy= () => {
        setChecking(true)

        const newOrder = {
            buyer: {
                name: 'Fabricio',
                phone: 3517320266,
                email: 'fabriciokpi@gmail.com'
            },
            date: Timestamp.fromDate(new Date()), 
            items: cart,
            total: total
        }
        const batch = writeBatch(db)
        const outOfStock = []

        newOrder.items.forEach((prod, i) => {
            getDoc(doc(db, 'Products', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= newOrder.items[i].quantity) {
                    batch.update(doc(db, 'Products', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - newOrder.items[i].quantity
                    })
                } else {
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
                    
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), newOrder).then(() => {
                batch.commit().then(() => {
                    setChecking(false) 
                    setConfirmed(true) 
                })
            }).catch(() => {
                setError(true)
            }).finally(() => {
                setTimeout(() => {
                    setConfirmed(false)
                    setError(false)
                }, 2000)
                clearCart()
                setTotal(0)
            })
        }

    }

    return (
            <div>
                <h1>Cart</h1>       
                <main>
                {checking  && <Processing/> }
                {(confirmed && !checking) && <Confirmation/>}
                {(error && !confirmed && !checking) && <Error/>}

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