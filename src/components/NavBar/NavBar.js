import './NavBar.css'
import logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import products from '../../assets/products'




const NavBar = ({count}) => {

    return (
        <nav className="nav fixed-top">
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
                            {                          
                            products.map(prod => 
                                <NavLink to={`/category/${prod.brand}`} key={prod.id} className="dropdown-item" ><li>{prod.category}</li></NavLink>
                            )}
                        </ul>
                    </li>
                </ul>
                <NavLink to='/about' className="nav-link" href="#/">About Us</NavLink>
                <NavLink to='/contact' className="nav-link " aria-current="page" href="dangerouslySetInnerHTML">Contact</NavLink>
            </div>
            <CartWidget count={count}/>
        </nav>
    )
}

export default NavBar;