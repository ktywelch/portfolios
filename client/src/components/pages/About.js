import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="About">
                <h5>The Employee Directory application is a front end react 
                    application that creates a list of users from an opesoruce API that represents employees </h5>   
                <h5>The user can search and filter the users by name.</h5>
            <Link to="/">Back to the home page</Link>               
        </div>
     );
}
 
export default NotFound;