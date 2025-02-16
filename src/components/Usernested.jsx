import { Component } from "react";

class Usernested extends Component {
  constructor(props) {
    super(props)
    console.log("User nested constructor is called")
  }

  componentDidMount(){
    console.log("User nested compontDidMount is called")
  }
  componentDidUpdate(){
    console.log("user nested componentDidUpdate is called")
  }
  render(){
    console.log("User nested Render is called")
    return(
        <div>User Nested</div>
    )
  }
}

export default Usernested;
