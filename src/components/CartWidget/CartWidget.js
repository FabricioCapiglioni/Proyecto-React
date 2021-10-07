import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 


const CartWidget = () => {

    const { getTotalCount } = useContext(CartContext)

    return (
        <div className="navIcons col-sm-2">
            <FontAwesomeIcon className="userIcon" icon={faUser}/>
            <Link  className="btn btn-primary" to={`/cart`}><FontAwesomeIcon className="cartIcon"icon={faShoppingCart}/></Link>
            {(getTotalCount() > 0 ) && <p className="cartCount">{getTotalCount()}</p>}
        </div>
    ) 
}

export default CartWidget;