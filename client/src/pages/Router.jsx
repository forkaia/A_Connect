import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Public from "../components/Public.jsx";
import Protected from "../components/Protected.jsx";
const AuthRouter = props => (
  <Switch>
    <Route exact path="/public" exact component={withRouter(Public)} />
    <Route path="/protected" exact component={withRouter(Protected)} />
  </Switch>
);
export default AuthRouter;
