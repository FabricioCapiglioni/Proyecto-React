import './CartItem.css'
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';


const CartItem = ({product}) => {

    const [count, setCount] = useState(product.quantity)
    const [handdleQty, setHanddleQty] = useState(false)
    const { removeItem, changeQty } = useContext(CartContext)
    
    
    const changeQuantity = () => {
        setHanddleQty(true)
    }

    const confirmQuty = () => {
        changeQty(product, count)        
        setHanddleQty(false)
    }

    return (
        <div className="cartItem row col-sm-8">
            <div className="removeIcon col-sm-1">
                <FontAwesomeIcon icon={faTrash} onClick={() => removeItem(product.id)} />
            </div>
            <div className="prodDesc row col-sm-4">
                <div className="imgProd col-sm-4">
                    <img src={product.pictureUrl} alt="img" />
                </div>
                <div className="row itemName col-sm-8">
                    <p className="d-block">Brand</p>
                    <p className="d-block"><NavLink to={`/item/${product.id}`}>{product.name}</NavLink></p>
                </div>
            </div>
            <div className="row priceItem col-sm-2">
                <p>Price</p>
                <p>${product.price}</p>
            </div> 
            { !handdleQty ? 
                <div className="itemQty row col-sm-3">
                    <p>Quantity <FontAwesomeIcon icon={faEdit} onClick={() => changeQuantity()}/></p>
                    <p> {product.quantity}  </p>
                </div>
                :
                <div className='editQty col-sm-3'>
                    <div className='row col-sm-1'>
                        <ItemCount className='col-sm-12' count={count} setCount={setCount} item={product} />
                    </div>
                    <FontAwesomeIcon className="confirmIcon" icon={faCheck} onClick={() => confirmQuty()}/>
                </div>
            } 
            <div className="row subTotal col-sm-2">
                <p>Subtotal</p>
                <p>$ {product.price * product.quantity} </p>
            </div> 
        </div>
    )
}
  
export default CartItem;