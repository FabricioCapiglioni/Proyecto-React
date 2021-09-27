import './Error404.css'
import { Link } from 'react-router-dom';

const Error404 = () => {

    return(
        <div className="error404">
            <h1>Oops!</h1>
            <h2>404 - PAGE NOT FOUND</h2>
            <p>The page you are looking for might have been removed, 
                had its name changed or is temporarily unavailable.</p>
            <Link  className="col-sm-3" to={`/`}>                      
                <button type="button"className="col-sm-2 btn btn-primary" >
                    GO TO HOMEPAGE
                </button>
            </Link>
        </div>
    )
} 

export default Error404;