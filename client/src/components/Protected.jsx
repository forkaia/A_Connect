import React, { Component } from "react";
import withAuth from "../components/Auth/withAuth";

class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      name: "",
      _id: ""
    };
  }

  componentDidMount() {
    const { id } = this.props.confirm;
    fetch("/users/" + id, {
      method: "GET"
    })
      .then(res => res.json())
      .then(user => {
        this.updateUser(user);
      });
  }

  updateUser = user => {
    const { username, email, name, _id } = user;
    this.setState({
      username,
      email,
      name,
      _id
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={props => {
            this.props.history.replace("/");
          }}
        >
          Home
        </button>
        <h4>This is a Private Route for: {this.state.name}</h4>
      </div>
    );
  }
}

export default withAuth(Private);
