import "../../css/NavBar.css"
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <ol>
            <li><Link to="/hom" className="link">Home</Link></li>
            <li><Link to="/abt" className="link">About Us</Link></li>
            <li><Link to="/stf" className="link">Staff</Link></li>
            <li><Link to="/cont" className="link">Contact</Link></li>
            <li><Link to="/log" className="link">Login</Link></li>

        </ol>
    )
}

export default NavBar