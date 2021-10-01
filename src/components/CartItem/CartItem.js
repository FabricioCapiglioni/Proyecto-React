import './CartItem.css'
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
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
        <div className="prod row">
            <div className="eliminarItem col-sm-1">
                <FontAwesomeIcon className="techIcon" icon={faTrash} onClick={() => removeItem(product.id)} />
            </div>
            <div className="prodDesc row col-sm-4">
                <div className="imgProd col-sm-4">
                    <img src={product.pictureUrl} alt="img" />
                </div>
                <div className="prodType col-sm-8">
                    <NavLink to={`/item/${product.id}`}><p>{product.name}</p></NavLink>
                </div>
            </div>
            <div className="itemCant row col-sm-4">
                
               { !handdleQty ?
                    <p className="itemQuantity col-sm-8"> Quantity: {product.quantity} 
                        <FontAwesomeIcon className="techIcon" icon={faEdit} onClick={() => changeQuantity()}/>
                    </p>
               :
                    <>
                        <ItemCount count={count} setCount={setCount} item={product} />
                        <FontAwesomeIcon className="techIcon" icon={faCheck} onClick={() => confirmQuty()}/>
                    </>
                }
                    
            </div>
            <div className="row price col-sm-2">
                <p  className="precioItem col-sm-4">$ {product.price * product.quantity} </p>
            </div> 
        </div>
    )
}
  
export default CartItem;