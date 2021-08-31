import './NavBar.css'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
    return (
        <nav className="nav fixed-top">
            <div className="navLinks col-sm-10">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">About Us</a>
                <a className="nav-link" href="#">Partners</a>
            </div>
            <div className="navIcons col-sm-2">
                <FontAwesomeIcon className="userIcon" icon={faUser} />
                <FontAwesomeIcon className="cartIcon"icon={faShoppingCart}/>
                <p className="cartCount">10</p>
            </div>
        </nav>
    )
}

export default NavBar;