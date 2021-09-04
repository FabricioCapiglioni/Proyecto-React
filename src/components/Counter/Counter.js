import { useState } from "react";
import './Counter.css';
import iphone12 from '../../assets/img/iPhone12Card.png'
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({stok, initial}) => {

    const [ count , setCount] = useState (parseInt(initial));
    
    const subtFunction = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const addFunction = () => {
        if (count < stok) {
            setCount(count + 1)
        }
    }
    const addToCart = () => {
        setCount(0)
    }

    return (
        <div className="cardContainer">
            <div className="card">
                <div className="imgContainer">
                    <img src={iphone12} className="card-img-top" alt="..."></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title"> iPhone 12 Pro Max "(256 GB)"</h5>
                    <div className="cantContainer">
                        <FontAwesomeIcon className="cantIcon" icon={faMinusCircle} onClick={subtFunction}/>
                        <h3>{count}</h3>
                        <FontAwesomeIcon className="cantIcon" icon={faPlusCircle} onClick={addFunction}/>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg" onClick={addToCart}>Agregar al Carrito</button>
                </div>
            </div>
        </div>


    )
}

export default Counter;
