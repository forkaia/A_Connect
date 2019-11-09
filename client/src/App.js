import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import SignHome from "./pages/SignHome";
import AuthRouter from "./pages/Router.jsx";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={withRouter(Home)} />
          {/* <Home />
        </Route> */}
          {/* </Router>
      <Router> */}
          <Route path="/info" exact={true} component={withRouter(Learn)}>
            {/* <Info />
          <Cal />
          <More /> */}
          </Route>
          {/* </Router>
      <Router> */}
          <Route path="/signhome" exact={true} component={withRouter(SignHome)}>
            {/* <SignHome /> */}
          </Route>
          <AuthRouter />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
