import { useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import products from '../../assets/products.js';
import ItemDetail from '../ItemDetail/ItemDetail';


function getList() {

return new Promise((resolve, reject) => {
    setTimeout(() => resolve(products[0]), 2000)
})
}

const ItemDetailContainer = ({count, setCount}) => {

    const [phoneDetail, setPhoneDetail] = useState([])

    useEffect(() => {
        const list = getList()

        list.then(list => {
            setPhoneDetail(list)
        }, err => {
            console.log(err);
        })
    }, [])


    return ( 
        <section className="container-fluid itemDetailContainer">
            <div className="">
                <h1 className="title">Product Detail</h1>
            </div>                
            <ItemDetail item={phoneDetail} count={count} setCount={setCount} />                 
        </section>            
    )
}

export default ItemDetailContainer;