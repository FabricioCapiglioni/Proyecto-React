import './Item.css';


const Item = ({productData}) => {

    return (
        <div className="cardContainer">
            <div className="card">
                <div className="imgContainer">
                    <img src={productData.pictureUrl} className="card-img-top" alt="..."></img>
                </div>
                <div className="card-body">
                    <p className="brand"> {productData.brand} </p>
                    <h5 className="card-title"> {productData.name} </h5>
                    <p className="price"> U$D {productData.price} </p>
                    <button type="button" className="btn btnDetalle btn-primary btn-lg">Details</button>
                </div>
            </div>
        </div>
    )
}

export default Item;