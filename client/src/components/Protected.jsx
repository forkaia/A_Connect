import React, { Component } from "react";
import withAuth from "../components/Auth/withAuth";

class Private extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   const { id } = this.props.confirm;
  //   fetch(`/users/:_${id}`, {
  //     method: "GET"
  //   })
  //     .then(user => {
  //       user.json();
  //     })
  //     .then(user => {
  //       return user;
  //     });
  // }

  render() {
    return (
      <div>
        {/* {console.log(this.props)} */}
        {/* Welcome: {this.props} */}
        {/* {console.log(this.props)} */}
        <button
          onClick={props => {
            this.props.history.replace("/");
          }}
        >
          Home
        </button>
        <h4>This is a Private Route for: </h4>
      </div>
    );
  }
}

export default withAuth(Private);
