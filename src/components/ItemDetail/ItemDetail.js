import { useState, useContext } from "react";
import './ItemDetail.css';
import ItemTechSpecs from './ItemTechSpecs/ItemTechSpecs';
import ItemCount from '../ItemCount/ItemCount';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import NotificationContext from '../../context/NotificationContext'

const ItemDetail = ({item}) => {

    const [ count , setCount] = useState(0);
    const { addItem, cart, removeItem } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    
    if (!item){
        return (
            <Loading/>
        )
    }

    const onAdd = () => {
        setNotification("check", `Added to Cart, ${item.name} (${count} items) `, 2000)
        addItem(item, count)
        setCount(0)        
    }

    const isInCart = (itemId) => {
        return cart.some((product) => product.id === itemId) 
    };

    const brandTitle = item.brand;

    function capt(brandTitle) {
        return brandTitle.charAt(0).toUpperCase() + brandTitle.slice(1);
        }

    
    return (

        <div className="container-fluid row ">
            <div className="col-sm-6">
                <img className='imgProduct' src={item.pictureUrl} alt="..." ></img>
            </div>
            <div className="col-sm-6 itemDetail">
                <h2 className="brandDetail"> {capt(brandTitle)} </h2>
                <h2 className="nameDetail"> {item.name} </h2>                
                <p className="descriptionDetail"> <b>Description:</b> {item.description} </p>
                <p className="priceDetail"> U$D {item.price} </p>
                <div className="quantityContainer row">
                    
                   { !isInCart(item.id) ? 
                    <>
                    <ItemCount count={count} setCount={setCount} item={item} />
                    <button type="button" className="col-sm-2 btnAdd btn btn-secondary" onClick={() => onAdd()}>Add to cart</button>
                    </>
                    :
                    <>                    
                    <h3 className="isInCart" ><FontAwesomeIcon className="" icon={faExclamationCircle}/>  this product is already in your cart</h3>
                    <button type="button" className="col-sm-4 btnAdd btn btn-secondary" onClick={() => removeItem(item.id)}>Remove from cart</button>
                    </>
                    }
                </div>
                <div className="buttons container-fluid row">    
                    <Link  className="col-sm-5" to={`/`}>                      
                        <button type="button"className="col-sm-12 btn btn-primary" >
                            More products
                        </button>
                    </Link>
                    <Link  className="col-sm-5" to={`/cart`}>
                        <button type="button"className="col-sm-12 btn btn-success" >
                            Go to cart
                        </button>                    
                    </Link>
                </div>
                <ItemTechSpecs item={item} />
            </div>
        </div>

    )
}
  
export default ItemDetail;