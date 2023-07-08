import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import useAuth from "./hooks/useAuth";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UsersListPage from "./pages/UserList";

const AuthRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route {...rest}>{user.name ? children : <Redirect to="/login" />}</Route>
  );
};

const GuestRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route {...rest}>{user.name ? <Redirect to="/users" /> : children}</Route>
  );
};

export default function Router() {
  return (
    <Switch>
      <GuestRoute path="/login">
        <LoginPage />
      </GuestRoute>
      <GuestRoute path="/register">
        <RegisterPage />
      </GuestRoute>
      <AuthRoute path="/users">
        <UsersListPage />
      </AuthRoute>
    </Switch>
  );
}
