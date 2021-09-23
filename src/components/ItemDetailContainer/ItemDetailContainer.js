import { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import './ItemDetailContainer.css';
import products from '../../assets/products.js';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';


function getProduct() {

return new Promise((resolve, reject) => {
    setTimeout(() => resolve(products), 2000)
})
}

const ItemDetailContainer = ({setCartCount}) => {

    const [phoneDetail, setPhoneDetail] = useState([])
    const  {id}  = useParams()

    useEffect(() => {
        const list = getProduct()

        list.then(list => {
            const product = list.find(prod => prod.id === id)
            setPhoneDetail(product)
        }, err => {
            console.log(err);
        })
    }, [ id ])

    if (phoneDetail.length === 0 ) {
        return (
           <Loading /> 
        )
    }

    return ( 
        <section className="container-fluid itemDetailContainer">
            <div className="">
                <h1 className="title">Product Detail</h1>
            </div>                
            <ItemDetail item={phoneDetail} setCartCount={setCartCount} />                 
        </section>            
    )
}

export default ItemDetailContainer;