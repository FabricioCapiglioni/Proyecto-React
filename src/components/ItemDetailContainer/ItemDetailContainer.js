import { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import { db } from '../../assets/Services/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
 


const ItemDetailContainer = () => {

    const [phoneDetail, setPhoneDetail] = useState([])
    const  {id}  = useParams()

    useEffect(() => {
        getDoc(doc(db, 'Products' , id)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setPhoneDetail(product)
        })
    }, [ id ])

    if ( phoneDetail.length === 0 ) {
        return (
           <Loading /> 
        )
    }

    return ( 
        <section className="container-fluid itemDetailContainer">
            <div>
                <h1 className="title">Product Detail</h1>
            </div>                
            <ItemDetail item={phoneDetail} />                 
        </section>            
    )
}

export default ItemDetailContainer;