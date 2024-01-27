import "../../css/Login.css"

const Signup = () => {
    return(
    <div>
    <div className="contain">
        <h3>SignUp</h3>
        <form action="">       
        <input type="text" placeholder="Name"/><br/><br/>
        <input type="text" placeholder="Email"/><br/><br/>
        <input type="text" placeholder="Password"/><br/><br/>
        <input type="text" placeholder="Confirm password"/><br/><br/>
        <input type="number" placeholder="Phone Number"/><br/><br/>
        <button className="signin">Sign In</button>
        </form>
    </div>
    </div>
    )
}

export default Signup;