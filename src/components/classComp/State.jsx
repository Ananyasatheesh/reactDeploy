import React from "react";

class State extends React.Component{
    constructor(){
        super()
        this.State={
            name:"State Class",
            course:"Mern",
        }
    }
    changeState = () =>{
        this.State.name = "Changed State class" //useState should be used 
        console.log("hii")
    }
    //'this' can't be used without super(), super() calls constructor of React.component
    render(){
        return(
            <div>
            <h2 >Vanakkam, {this.State.name} This is {this.State.course} class. </h2>
            {/* <h3> {this.State.name} is changed to {this.changeState()}</h3> */}
            {/* <button onClick={this.changeState()}>Click me to change state</button> */}

            <button onMouseOver={this.changeState} style={{padding:"10px", marginLeft:"50px", marginBottom:"50px"}}> {this.State.name} is changed </button>
            </div>
            //in button during onClick/ onMouseover func shouldn't be called() because if this.changestate() then only there event calling 
            //is completed. if given "this.changeState" only when onClick/ onMouseover is done that functon will be called
        )
    }
}

export default State;