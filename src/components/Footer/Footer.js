import './Footer.css'
import { NavLink } from 'react-router-dom';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useContext } from 'react'
import { getCategories } from '../../assets/Services/firebase/firebase'
import NotificationContext from '../../context/NotificationContext'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Footer = () => {

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
        <footer className="footer">
            <div className="navLinks col-sm-12">
                <NavLink to='/' className="nav-link active" aria-current="page" href="dangerouslySetInnerHTML">Home</NavLink>
                <NavDropdown title="Brands" className="nav-link" href="!#" id="collasible-nav-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        
                        {categories?.map(category =>
                            <NavLink to={`/category/${category.name}`} key={category.id} className="dropdown-item" >
                                <li>{category.description}</li>
                            </NavLink>)
                        }

                    </ NavDropdown>
                <NavLink to='/contact' className="nav-link" aria-current="page" href="dangerouslySetInnerHTML">Contact Us</NavLink>
            </div>
            <div className="copyrights">
                <p>Coder Phone <FontAwesomeIcon icon={faCopyright}/> 2021</p>
                <p>  Created by 
                    <a className="github" href="https://github.com/FabricioCapiglioni" target="blank"> Fabricio Capiglioni Dómene <FontAwesomeIcon icon={faGithub}/> </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;