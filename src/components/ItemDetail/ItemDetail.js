import './ItemDetail.css';
import ItemTechSpecs from './ItemTechSpecs/ItemTechSpecs';
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from '../Loading/Loading';

const ItemDetail = ({ item, count, setCount }) => {
    

    if (!item){
        return (
            <Loading/>
        )
    }

    const subtFunction = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const addFunction = () => {
        if (count < item.stock) {
            setCount(count + 1)
        }
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
                <p className="priceDetail"> U$D {item.price*count} </p>
                <div className="cantContainer">
                        <FontAwesomeIcon className="cantIcon" icon={faMinusCircle} onClick={subtFunction}/>
                        <h3>{count}</h3>
                        <FontAwesomeIcon className="cantIcon" icon={faPlusCircle} onClick={addFunction} />  
                </div>
                <p>Stock {item.stock} u. </p>
                <div className="buttons container-fluid row">        
                    <button type="button" className="col-sm-4 btn btn-primary">Buy Now</button>
                    <button type="button" className="col-sm-4 btn btn-secondary">Add to Cart</button>
                </div>
                <ItemTechSpecs item={item} />
            </div>
        </div>

    )
}
  
export default ItemDetail;