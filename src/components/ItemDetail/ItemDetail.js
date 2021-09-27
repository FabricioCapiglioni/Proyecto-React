import { useState, useContext } from "react";
import './ItemDetail.css';
import ItemTechSpecs from './ItemTechSpecs/ItemTechSpecs';
import ItemCount from '../ItemCount/ItemCount';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import CartContext from "../../Context/CartContext";

const ItemDetail = ({item}) => {

    const [ count , setCount] = useState(0);
    const { addItem } = useContext(CartContext)
    
    if (!item){
        return (
            <Loading/>
        )
    }

    const onAdd = () => {
        addItem(item, count)
        setCount(0)
    }

    
    return (

        <div className="container-fluid row ">
            <div className="col-sm-6">
                <img src={item.pictureUrl} alt="..." ></img>
            </div>
            <div className="col-sm-6 itemDetail">
                <h2 className="brandDetail"> {item.brand} </h2>
                <h2 className="nameDetail"> {item.name} </h2>                
                <p className="descriptionDetail"> <b>Description:</b> {item.description} </p>
                <p className="priceDetail"> U$D {item.price} </p>
                <div className="quantityContainer row">
                    <ItemCount count={count} setCount={setCount} item={item} />
                    <button type="button" className="col-sm-2 btnAdd btn btn-secondary" onClick={() => onAdd()}>Add to cart</button>
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