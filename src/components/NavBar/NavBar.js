import './NavBar.css'
import logo from '../../assets/img/logo.png'
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="nav fixed-top">
            <div classname="container col-sm-2">
                <a classname="navbar-brand" href="javascript:void(0);">
                    <img src={logo} alt="" width="50" height="50"></img>
                </a>
            </div>
            <div className="navLinks col-sm-8">
                <a className="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                <ul className="nav-link"> 
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item"  href="javascript:void(0);"> <FontAwesomeIcon icon={faStar}/> Top Sales</a></li>
                            <li><a className="dropdown-item" href="javascript:void(0);"> <FontAwesomeIcon icon={faMobileAlt}/> Smart Phones</a></li>
                            <li><a className="dropdown-item" href="javascript:void(0);"> <FontAwesomeIcon icon={faFireAlt}/> Hot Sales</a></li>
                        </ul>
                    </li>
                </ul>
                <a className="nav-link" href="javascript:void(0);">About Us</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;