import React from "react";
import TestComp from "../functionalComp/TestComp";

class TstClass extends React.Component {
  render() {
    return(
    <div>
       <TestComp />
      <h1>This is Test Class comp React App</h1>
    </div>
  )
}
}

export default TstClass

//Class Component won't return anything defaultly.

//Component can be either .js or .jsx
