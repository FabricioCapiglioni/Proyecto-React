import { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading';
import Carousel from '../Carousel/Carousel'
import { getProducts } from '../../assets/Services/firebase/firebase'




const ItemListContainer = () => {

    const [listPhones, setListPhones] = useState([])
    const  {brand}  = useParams()

    useEffect(() => {
        getProducts('brand', '==', brand).then(products => {
            setListPhones(products)
        }).catch((error) => {
            console.log(error)
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