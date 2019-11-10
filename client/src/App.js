import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import SignHome from "./pages/SignHome";
import Protected from "./components/Protected.jsx";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: {
  //       name: "",
  //       email: "",
  //       username: ""
  //     }
  //   };
  // }
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route
              path="/"
              exact={true}
              component={withRouter(Home)}
              // user={this.state.user}
            />
            <Route
              path="/info"
              exact={true}
              component={withRouter(Learn)}
            ></Route>
            <Route
              path="/signhome"
              exact={true}
              component={withRouter(SignHome)}
            ></Route>
            <Route
              path="/protected/"
              component={Protected}
              // user={this.state.user}
            />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
