import { useState, useEffect} from 'react';
import './ItemListContainer.css'
import products from '../../assets/products.js'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading';


function getList() {
return new Promise((resolve, reject) => {
    setTimeout(() => resolve(products), 2000)
})
}


const ItemListContainer = () => {

    const [listPhones, setListPhones] = useState([])

    useEffect(() => {
        const list = getList()

        list.then(list => {
            setListPhones(list)
        }, err => {
            console.log(err);
        })
    }, [])

    if (listPhones.length === 0 ) {
        return (
           <Loading /> 
        )
    }


    return ( 
        <section className="container-fluid">
            <div>
                <h1 className="title">Our Products</h1>
                
            </div>
            
            <ItemList item={listPhones} />
            
        </section>

    )
}

export default ItemListContainer;