import { useEffect, useState } from "react";
const About = () => {
const [tabName, setTabname] = useState("posts")

    const updateTab = () => {
        setTabname("posts")
    }
    const updateTab1 = () => {
        setTabname("comments")
    }
    const updateTab2 = () => {
        setTabname("todos")
    }
    useEffect( () => {
       console.log(`https://jsonplaceholder.typicode.com/${tabName}`)
       fetch(`https://jsonplaceholder.typicode.com/${tabName}`)
      .then(response => response.json())
      .then(json => console.log(json))
    },[tabName])

    
    // useEffect( () => {
    //     console.log("Side effects are sleepy and drowziness")
    //  },[tabName])


    //useEffect comes to play when [tabName] is used or giving nothing. if given [](emptyBracket) no useEffect will be loaded

    return(
        <>
        <h1>{tabName}</h1>
        <button onClick={updateTab}>Click me if u get cold</button>
        <button onClick={updateTab1}>Click me if u get fever</button>
        <button onClick={updateTab2}>Click me if u get epilepsy</button>
        </>
        
    )
}   

export default About;



// import { useEffect, useState } from "react";
// const About = () => {
// const [tabName, setTabname] = useState("You don't have any disease.Don't take pills")

//     const updateTab = () => {
//         setTabname("citricin for cold")
//     }
//     const updateTab1 = () => {
//         setTabname("Dolo650 for fever")
//     }
//     const updateTab2 = () => {
//         setTabname("Levipil for epilepsy")
//     }
//     useEffect( () => {
//         console.log(`https://jsonplaceholder.typicode.com/${tabName}`)
//        fetch(`https://jsonplaceholder.typicode.com/${tabName}`)
//       .then(response => response.json())
//       .then(json => console.log(json))
//         // console.log("Side effects are sleepy and drowziness")
//     },[tabName])

    
//     // useEffect( () => {
//     //     console.log("Side effects are sleepy and drowziness")
//     //  },[tabName])


//     //useEffect comes to play when [tabName] is used or giving nothing. if given [](emptyBracket) no useEffect will be loaded

//     return(
//         <>
//         <h1>{tabName}</h1>
//         <button onClick={updateTab}>Click me if get cold</button>
//         <button onClick={updateTab1}>Click me if get fever</button>
//         <button onClick={updateTab2}>Click me if get epilepsy</button>

//         </>
        
//     )
// }   

// export default About;