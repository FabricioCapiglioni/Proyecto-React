import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {
    return (
        <div className="navIcons col-sm-2">
            <FontAwesomeIcon className="userIcon" icon={faUser}/>
            <FontAwesomeIcon className="cartIcon"icon={faShoppingCart}/>
            <p className="cartCount">10</p>
        </div>
    ) 
}

export default CartWidget;