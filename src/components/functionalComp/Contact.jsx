import { useState } from "react";

const Contact = () => {

    const [info, setInfo] =useState("Contact")
    const updateInfo = () => {
        setInfo("ananya@gmail.com")
        console.log("Hello")
    }

    return(
        <div>
        <h1>This is {info}</h1>
        <button onDoubleClick={updateInfo}>Update Contact</button>
        </div>
    )
}   

export default Contact;