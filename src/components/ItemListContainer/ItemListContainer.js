import { useState, useEffect} from 'react';
import { useParams } from 'react-router';
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
    const  {brand}  = useParams()

    useEffect(() => {
        const list = getList()

        list.then(list => {
            if (!brand) {
                setListPhones(list)
            } else {
                const prodCategory = list.filter(prod => prod.brand.toLowerCase() === brand)
            setListPhones(prodCategory)
            }
                        
        }, err => {
            console.log(err);
        })
        return (() => {
            setListPhones([])
          })
    }, [brand])

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