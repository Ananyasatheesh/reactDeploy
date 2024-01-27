import "../../css/Login.css"


const Login1 = () => {

    return (
        <div className="containLog">
            <h3>Login</h3>
            <input type="text" placeholder="Email"></input> <br/> <br/>
            <input type="text" placeholder="Password"></input><br/><br/>
            <button className="signin">Login</button> <br/>

        </div>
    )
}

export default Login1;




// <button onClick={() => setCountval({type:"sub"})}>Subtract</button>  
//         <h3>Count: {countVal.count}</h3> 
//         <button onClick={() => setCountval({type:"add"})}>Add</button>
//         <button onClick={() => setCountval({type:"res"})}>Reset</button>