import React, { Component } from "react";
import withAuth from "../components/Auth/withAuth";

class Private extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   console.log("here " + this.props);
  //   console.log(this.props);
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
