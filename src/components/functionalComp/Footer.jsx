import { useState } from "react";
import "../../css/Footer.css"

const Footer = () => {
    const [rew,setRew] = useState(false)
    const updRew = () => {
        setRew("Earned a reward")
    }
    if(setRew) 
    

    return(
        <div className="contain">
            <div className="left">
                <h3>Contact Us:</h3>
                <button onDoubleClick={updRew}>Click me to earn a reward</button>
                <h3>{rew} </h3>
                <h5>&copy; Ananya</h5>
            </div>
            <div className="right">
            <p>E-Mail : curepure@gmail.com</p>
            <p>Website : www.curepure.com</p>
            <p>Contact : 9876543210</p>
            </div>
        </div>


        // <div className="foot">
        // <div className="block">
        // <h3 style={{marginLeft:"20px"}}>Contact Us:</h3>
        // <button >Click me to earn a reward</button>
        // <div className="cont">
        //     <p>E-Mail : curepure@gmail.com</p>
        //     <p>Website : www.curepure.com</p>
        //     <p>Contact : 9876543210</p>
        //     </div>
        // </div>
        // </div>
    )
}   

export default Footer;