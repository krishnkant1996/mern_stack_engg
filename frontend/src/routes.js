import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import {createBrowserHistory } from "history";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import ForgotPassword from "./component/ForgotPassword";
import NewPassword from "./component/NewPassword";
import Home from "./component/Home";
import Snackbar from "./component/Snackbar";
export const history = createBrowserHistory();

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
let sigIn = localStorage.getItem("signIn")?localStorage.getItem("signIn"):false;
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/new-password/:code" component={NewPassword} />
        {sigIn?
          <>
          <Route path="/" component={Home} />
          </>
        :
          <>   
          <Route exact path="/" component={SignIn} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          </>
        }
      </Switch>
      <Snackbar/>
    </div>
  </Router>
);

export default AppRouter;