import "../../css/NavBar.css"
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <ol>
            <li><Link to="/hom" className="link">Home</Link></li>
            <li><Link to="/abt" className="link">About Us</Link></li>
            <li><Link to="/stf" className="link">Staff</Link></li>
            <li><Link to="/cont" className="link">Contact</Link></li>
            <li><Link to="/dlog" className="link">Dummylogin</Link></li>
            <Link to="/sign">
            <button style={{paddingRight:"30px",fontSize:"16px",marginLeft:"500px",marginTop:"15px", marginRight:"10px"}}>Sign Up</button>
            </Link>
            <Link to='/log'>
            <button style={{paddingRight:"30px",fontSize:"16px",marginTop:"15px"}}>Login</button>
            </Link>

        </ol>
    )
}

export default NavBar