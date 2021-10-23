import { NavLink } from 'react-router-dom';
import './Item.css';


const Item = ({productData}) => {


    return (
        <div className="cardContainer col-sm-3">
            <div className="card col-sm-4">
                <div className="imgContainer">
                    <img src={productData?.pictureUrl} className="card-img-top" alt="..."></img>
                </div>
                <div className="card-body">
                    <p className="brand"> {productData?.brand} </p>
                    <h5 className="card-title"> {productData?.name} </h5>
                    <p className="price"> U$D {productData?.price} </p>
                    <NavLink to={`/item/${productData.id}`} type="button" className="btn btnDetalle btn-primary btn-lg">Details</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Item;