import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartWidget = ({cartCount}) => {
    return (
        <div className="navIcons col-sm-2">
            <FontAwesomeIcon className="userIcon" icon={faUser}/>
            <Link  className="btn btn-primary" to={`/cart`}><FontAwesomeIcon className="cartIcon"icon={faShoppingCart}/></Link>
            <p className="cartCount">{cartCount}</p>
        </div>
    ) 
}

export default CartWidget;