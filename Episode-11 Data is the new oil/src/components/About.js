import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="about-page">
        <h1>About</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserClass name={"Harshita Gupta(class)"} />
        <User name={"Harshita Gupta(function)"} />
        {/* <UserClass name={"Second"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about-page">
//       <h1>About</h1>
//       {/* <User name={"Harshita Gupta(function)"} /> */}
//       <UserClass name={"Harshita Gupta(class)"} />
//     </div>
//   );
// };

export default About;
