import './Cart.css'
import CartList from '../CartList/CartList'
import { useContext, useState, useEffect } from "react";
import {CartContext} from "../../Context/CartContext";
import { Link } from 'react-router-dom';


const Cart = () => {
    const [total, setTotal] = useState(0)
    const { cart, clearCart, getTotal } = useContext(CartContext)

    useEffect (() =>{
        setTotal(getTotal())
    },[getTotal])

    console.log(cart)

    return (
            <div>
                <h1>Cart</h1>       
                <main>
                {cart.length !== 0 ? (
                    <>
                        <CartList cart={cart} />
                        <div class="suma row">
                            <div class="direccion col-sm-4">
                                <button id="btnFormDireccion" type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    Dirección de envío
                                </button>
                            </div>  
                            <div id="totalCompra" class="sumaTotal col-sm-8">
                                <p>Total con envío</p>
                                <p> $ {total} </p>
                            </div>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button id="vaciar" class="btn btn-primary me-md-2" type="button" onClick={() => clearCart()}>Vaciar Carrito</button>
                            <button id="continuarCompra" class="btn btn-primary me-md-2" type="button">Continuar</button>
                        </div>
                    </>
                    ) : 
                    (
                    <div className="tienda__cartNoElements">
                        <p className="tienda__cartNoElementsText">
                        No hay elementos en tu carrito
                        </p>
                        <Link to="/" className="tienda__cartNoElementsLink">
                        Volver al menú principal
                        </Link>
                    </div>
                )}
                </main>        
                    
            </div>
            
    )
}

export default Cart