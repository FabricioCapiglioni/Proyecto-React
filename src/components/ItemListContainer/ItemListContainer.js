import { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import './ItemListContainer.css'
import products from '../../assets/products.js'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading';
import Carousel from '../Carousel/Carousel'



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

    const brandTitle = brand;

    function capt(brandTitle) {
    return brandTitle.charAt(0).toUpperCase() + brandTitle.slice(1);
    }


    return ( 
        <>
            {!brand ? <Carousel/> : null}
            <div className="container-fluid">
                {brand ? <h1 className="title">{capt(brandTitle)}</h1> : <h1 className="title">Our Products</h1> } 
                <ItemList item={listPhones} />
                
            </div>
        </>
    )
}

export default ItemListContainer;