import React, { useMemo, useState } from "react";
import '../../css/UseRefer.css'

const Memo = () => {
    const [number, setNumber] = useState(0)
    const [dark, setTheme] = useState(false)
    const doubleNumber = useMemo(() => {
        return doubleSlownum(number)
    },[number])
    

    function doubleSlownum(num){
        console.log("It is calling")
        for(let i=0; i<100000; i++){}
        return num*2;
    }
    const theme = useMemo(() =>{
        return {backgroundColor: dark?"red":"white",
        color: dark?"white":"black"}
    },[dark])

    return (
        <div>
            <input type="number"  value={number} onChange={(e) => setNumber(e.target.value)}/> <br />
            <button onClick={() => {setTheme(dark => !dark)}}> Change theme</button>
            <h2 style={theme}>Doubled number is {doubleNumber}</h2>
        </div>
    )
}
export default Memo;