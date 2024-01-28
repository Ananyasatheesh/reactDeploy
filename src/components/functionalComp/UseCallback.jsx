import { useCallback, useState } from 'react';
import '../../css/UseRefer.css'
const UseCallback = () => {
    const [count, setCount] = useState(0);
    const handleCallbackFunc = useCallback(() => {
            console.log(`Button clicked or not if yes print the count, if not don't print it, Count: ${count}`)

        },[count])
    
    return (
        <div>
            <h2>Count is : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Add one</button>
            <button onClick={handleCallbackFunc}>Callback Count</button>
        </div>
        
    )
}

export default UseCallback;