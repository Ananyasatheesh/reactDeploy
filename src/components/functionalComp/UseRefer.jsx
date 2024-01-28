import { useState, useRef, useEffect } from 'react'
import '../../css/UseRefer.css'

const UseRefer = () => {
const [batch, setBatch] = useState('')
const prevBatch = useRef('')
useEffect(() => {
    prevBatch.current = batch
}, [batch])



    return(
        <div>
            <h2>Useref</h2>
            <input type="number" onChange={(e) => {setBatch(e.target.value)}}/> 
            {/* in useRef number is not applicable because it don't store prev number so useReducer comes to play */}
            <p>Current batch size is {batch} and the prev batch size is {prevBatch.current} </p>
            {/* useRef should have .current attribute */}
        </div>
    )
}

export default UseRefer



// import { useState, useRef, useEffect } from 'react'
// import '../../css/UseRefer.css'

// const UseRefer = () => {
// const [batch, setBatch] = useState('')
// const prevBatch = useRef('')
// useEffect(() => {
//     prevBatch.current = batch
// }, [batch])



//     return(
//         <div>
//             <h2>Useref</h2>
//             <input type="text" onChange={(e) => {setBatch(e.target.value)}}/>
//             <p>Text typed in input box is {batch} and it's prev text is {prevBatch.current} </p>
//             {/* useRef should have .current attribute */}
//         </div>
//     )
// }

// export default UseRefer