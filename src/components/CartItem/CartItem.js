import './CartItem.css'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const CartItem = ({product}) => {

    const { removeItem } = useContext(CartContext)
   
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
                    <p>{product.name}</p>
                </div>
            </div>
            <div className="itemCant row col-sm-4">
                <label> {product.quantity} </label>
            </div>
            <div className="row price col-sm-2">
                <p  className="precioItem col-sm-4">$ {product.price * product.quantity} </p>
            </div> 
        </div>
    )
}
  
export default CartItem;