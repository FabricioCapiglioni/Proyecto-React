import './Footer.css'
import { NavLink } from 'react-router-dom';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {

    return (
        <footer className="footer">
            <div className="navLinks col-sm-12">
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