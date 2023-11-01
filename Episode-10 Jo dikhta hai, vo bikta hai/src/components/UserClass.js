import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/HarshitaGupta16");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("NAMASTE REACT");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will Unmount");
  }

  render() {
    // const { name } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(name + " Child Render");
    return (
      <>
        <div className="user-card">
          <div>State Explanation in Class based components</div>
          <h1>Count = {this.state.count}</h1>
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
              this.setState({ count2: this.state.count2 + 1 });
            }}
          >
            Count Increase
          </button>
          <span>{" " + this.state.count2}</span>
        </div>
        <div style={{ padding: "20px 0px" }}>
          Calling API using ComponentDidMount
        </div>
        <div className="user-card">
          <img src={avatar_url} />
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: HarshitaGupta16</h4>
        </div>
      </>
    );
  }
}

export default UserClass;
