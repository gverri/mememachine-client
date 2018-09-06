import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Videos from "./containers/Videos";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Settings from "./containers/Settings";
import NewVideo from "./containers/NewVideo";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/settings" exact component={Settings} props={childProps} />
    <AuthenticatedRoute path="/videos/new" exact component={NewVideo} props={childProps} />
    <AuthenticatedRoute path="/videos/:id" exact component={Videos} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
