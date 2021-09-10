import './ItemTechSpecs.css';
import { faBatteryHalf, faCamera, faMemory, faMicrochip, faMobile, faSdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

const ItemTechSpecs = ({ item }) => {

    return (
        <div className="container row itemTechSpecs">
            <h2>Tech Specs</h2>
            <div className="techContainer col-sm-4">
                <FontAwesomeIcon className="techIcon" icon={faMicrochip} />
                <h3> Chip </h3>
                <p> {item?.techSpecs?.chip} </p>
            </div> 
            <div className="techContainer col-sm-4">
                <FontAwesomeIcon className="techIcon" icon={faSdCard} />
                <h3> Capacity </h3>
                <p> {item?.techSpecs?.capacity} </p>
            </div> 
            <div className="techContainer col-sm-4">
                <FontAwesomeIcon className="techIcon" icon={faMobile} />
                <h3> Display </h3>
                <p> {item?.techSpecs?.display} </p>
            </div> 
            <div className="techContainer col-sm-4">
                <FontAwesomeIcon className="techIcon" icon={faMemory} />
                <h3> RAM Memory </h3>
                <p> {item?.techSpecs?.ram} </p>
            </div> 
            <div className="techContainer col-sm-4">
                <FontAwesomeIcon className="techIcon" icon={faCamera} />
                <h3> Camera </h3>
                <p> {item?.techSpecs?.camera} </p>
            </div> 
            <div className="techContainer col-sm-4">
                <FontAwesomeIcon className="techIcon" icon={faBatteryHalf} />
                <h3> Batery </h3>
                <p> {item?.techSpecs?.batery} </p>
            </div> 
        </div>

    )
}

export default ItemTechSpecs;