import './CartWidget.css'
import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 
import Badge from 'react-bootstrap/Badge'


const CartWidget = () => {

    const { getTotalCount } = useContext(CartContext)

    return (
        <div className="cartWidget col-sm-6">
            <Link to={`/cart`}>           
                <FontAwesomeIcon className="cartIcon" icon={faShoppingCart}/>
                {
                (getTotalCount() > 0 ) && 
                <>
                    <Badge className="badge" bg="danger" >{getTotalCount()}</Badge>
                    <span className="visually-hidden">unread messages</span>
                </>
                }
            </Link>            
        </div>
    ) 
}

export default CartWidget;