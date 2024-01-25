function Props(props){
    const styleAttr={
        backgroundColor:"gray",
        color: "black"
    }


    return(
        <div style={styleAttr}>
            <h2>Hiii, {props.name} This is {props.course} class. </h2>
        </div>
    )

}

export default Props;