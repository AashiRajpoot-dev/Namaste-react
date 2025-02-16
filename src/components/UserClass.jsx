import React from "react";
import Usernested from "./Usernested";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "aashi",
        email: "aashiwork2022@gmail.com",
      },
    };
    console.log(this.props.name + " child constructor is called");

  }

  async componentDidMount() {
    console.log("child component did mount is called")
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();

    this.setState(
      {
        userInfo: json[0],
      },
      () => {
        // Updating state with first user
        console.log("Updated State:", this.state.userInfo); // Logs the correct updated state
      }
    );
  }
  componentDidUpdate(){
    console.log("first child Component did update is called")
  }
  componentWillUnmount(){
    console.log("first child component will unmount")
  }

  render() {
    console.log(this.props.name + " child render is called");
    // const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>user name:{this.state.userInfo.name}</h2>
        <h3>phone:{this.state.userInfo.email}</h3>
        <Usernested />
      </div>
    );
  }
}

export default UserClass;
