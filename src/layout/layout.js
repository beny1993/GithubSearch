import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../components/login/Login";
import PasswordPage from "../components/login/password/Password";
import Search from "../components/search/Search";

export default function layout() {
  return (
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/password" exact component={PasswordPage} />
      <Route path="/search" exact component={Search} />
    </Switch>
  );
}
