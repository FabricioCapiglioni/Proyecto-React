import './CartItem.css'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const CartItem = ({product}) => {

    const { removeItem } = useContext(CartContext)
   
    return (

        <div class="prod row">
            <div class="eliminarItem col-sm-1">
                <FontAwesomeIcon className="techIcon" icon={faTrash} onClick={() => removeItem(product.id)} />
            </div>
            <div class="prodDesc row col-sm-4">
                <div class="imgProd col-sm-4">
                    <img src={product.pictureUrl} alt="img" />
                </div>
                <div class="prodType col-sm-8">
                    <p>{product.name}</p>
                </div>
            </div>
            <div class="itemCant row col-sm-4">
                <label> {product.quantity} </label>
            </div>
            <div class="row price col-sm-2">
                <p  class="precioItem col-sm-4">$ {product.price * product.quantity} </p>
            </div> 
        </div>

    )
}
  
export default CartItem;