
import {Component} from "react";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props){
    super(props);
    console.log("parent constructor")
  }
  componentDidMount(){
    console.log("parent componentDidMount is called")
  }
  componentDidUpdate(){
    console.log("parent Component did update is called")
  }
  render() {
    console.log("parent render")
    return (
      <div>
        <h1>About Page</h1>
        <UserClass name={"First Child "} location={"Jabalpur"} />
      </div>
    );
  }
}

export default About;
