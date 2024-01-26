function Props(props){
    const styleAttr={
        backgroundColor:"gray",
        color: "black"
    }


    return(
        <div style={styleAttr}>
            <h2>Hiii, {props.name} This is {props.course} class. </h2>
            {/* if name is not defined no error will show but in useState if variable is not defined it shows error */}
        </div>
    )

}

export default Props;