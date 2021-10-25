import './NavBar.css'
import logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { getCategories } from '../../assets/Services/firebase/firebase'
import { useEffect, useState, useContext } from 'react'
import NotificationContext from '../../context/NotificationContext'


const NavBarComponent = () => {
    const [categories, setCategories] = useState()
    const { setNotification } = useContext(NotificationContext)

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        }).catch((error) => {
            setNotification('error', error, 2000)
        })
        return () => {
            setCategories()
        }
    }, [setNotification])

    return (
        <Navbar collapseOnSelect expand="lg" className="nav">
            <div className="col-sm-10 col-lg-2 ">
                <Link to='/' className="navbar-brand" href="#/">
                    <img src={logo} alt="" width="35" height="35"></img>
                    <h1>CoderPhone</h1>
                </Link>
            </div>
            <div id="responsive-navbar-nav" className="navLinks col-sm-12 col-lg-8 order-sm-2 order-lg-1">
                <NavbarCollapse id="basic-navbar-nav" className="navLinks">
                    <NavLink to='/' className="nav-link active" aria-current="page" href="dangerouslySetInnerHTML">Home</NavLink>
                    <NavDropdown title="Brands" className="nav-link" href="!#" id="collasible-nav-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        
                        {categories?.map(category =>
                            <NavLink to={`/category/${category.name}`} key={category.id} className="dropdown-item" >
                                <li>{category.description}</li>
                            </NavLink>)
                        }

                    </ NavDropdown>
                    <NavLink to='/contact' className="nav-link" aria-current="page" href="dangerouslySetInnerHTML">Contact Us</NavLink>
                </NavbarCollapse>
            </div>
            <div className="col-sm-2 col-lg-2 order-sm-1 order-lg-2">
                <CartWidget />
                <div className="col-sm-6">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
            </div>
        </Navbar>
    )
}

export default NavBarComponent;


/*
<nav className="nav ">
    <div className="container col-sm-2">
        <Link to='/' className="navbar-brand" href="#/">
            <img src={logo} alt="" width="35" height="35"></img>
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
</nav> */