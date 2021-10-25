import './ItemCount.css';
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ItemCount = ({item, count, setCount}) => {


    const subtFunction = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const addFunction = () => {
        if (count < item.stock) {
            setCount(parseInt(count + 1))
        }
    }

    const handleImpCant = ( {target} ) => {
    
        if(target.value >= 0 && target.value <= item.stock){
            
            setCount(parseInt(target.value))
        }
    } 

    const clickSelectValue = ( { target } ) => {
        target.select()
    }


   
    return (
            <div className="cantContainer col-sm-12 col-xxl-6">
                <FontAwesomeIcon className="cantIcon" icon={faMinusCircle} onClick={subtFunction}/>
                <div className="inputContainer">
                    <input type='number' value={count} onChange={handleImpCant} onClick={clickSelectValue} />
                    <p>Stock: {item.stock} </p>
                </div>
                <FontAwesomeIcon className="cantIcon" icon={faPlusCircle} onClick={addFunction}/>    
                           
            </div>
    )
}

export default ItemCount
