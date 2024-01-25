import "../../css/NavBar.css"
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <ol>
            <li><Link to="/hom">Home</Link></li>
            <li><Link to="/abt">About Us</Link></li>
            <li><Link to="/stf">Staff</Link></li>
            <li><Link to="/cont">Contact</Link></li>

        </ol>
    )
}

export default NavBar