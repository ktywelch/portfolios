import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <nav className="navbar footer">
            <h6>Kathleen Welch - Portfolio</h6>
            <button onClick={window.location = "mailto:ktywelch@yahoo.com"}>Contact Me</button>
        </nav>
      );
}
 
export default Footer;

