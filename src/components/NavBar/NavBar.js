import './NavBar.css'
import logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="nav ">
            <div className="container col-sm-2">
                <Link to='/' className="navbar-brand" href="#/">
                    <img src={logo} alt="" width="50" height="50"></img>
                    <h1>CoderPhone</h1>
                </Link>
            </div>
            <div className="navLinks col-sm-8">
                <NavLink to='/' className="nav-link active" aria-current="page" href="dangerouslySetInnerHTML">Home</NavLink>
                <ul className="nav-link"> 
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="dangerouslySetInnerHTML" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Brands
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">                            
                            <NavLink to={`/category/apple`} key="01" className="dropdown-item" ><li>Apple</li></NavLink>
                            <NavLink to={`/category/asus`} key="02" className="dropdown-item" ><li>Asus</li></NavLink>
                            <NavLink to={`/category/google`} key="03" className="dropdown-item" ><li>Google</li></NavLink>
                            <NavLink to={`/category/samsung`} key="04" className="dropdown-item" ><li>Samsung</li></NavLink>
                            <NavLink to={`/category/xiaomi`} key="05" className="dropdown-item" ><li>Xiaomi</li></NavLink>                            
                        </ul>
                    </li>
                </ul>
                <NavLink to='/contact' className="nav-link" aria-current="page" href="dangerouslySetInnerHTML">Contact Us</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;