import { useReducer } from "react";


const initialValue = {count:0}
function countFun (state, action) {
    switch (action.type) {
        case 'sub':
            return {count:state.count -1} 
        case 'add' :
            return {count:state.count +1} 
        case 'res' :
            return {count:initialValue.count} 
        default :
            return 1;
        } 
        
    }
const Login1 = () => {
   const [countVal, setCountval ] = useReducer(countFun, initialValue)

    return (
        <div>
        <button onClick={() => setCountval({type:"sub"})}>Subtract</button>  
        <h3>Count: {countVal.count}</h3> 
        <button onClick={() => setCountval({type:"add"})}>Add</button>
        <button onClick={() => setCountval({type:"res"})}>Reset</button>

        </div>
    )
}

export default Login1;


//reducer func inside component
//setCountval - 'dispatch' actions done by us
//prev state is holded in "state"
//state - to hold action
//while accessing 'initialValue' in LHS of reducer it is accessed as 'countVal', RHS same as 'initialValue'