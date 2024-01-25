import React from "react";
import TstClass from "./TstClass";
import  "../../css/Login.css"

const styleName={
  backgroundColor: "beige",
  color: "black",
  padding:"10px"

}

class Login extends React.Component {
  
  render() {
    return (
      <div style={styleName}>
        <TstClass />
        <h4>HII LOGIN</h4>
        <h4>My CSS is of External CSS</h4>
      </div>
    );
  }
}

export default Login;
