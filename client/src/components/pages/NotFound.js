import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>That page cannot be located.</p>
            <Link to="/">Back to the home page</Link>               
        </div>
     );
}
 
export default NotFound;