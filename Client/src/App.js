import React from "react";
import { Route, Switch } from "react-router-dom";

import NavG from "./components/Navbar";

import PageHome from "./page/PageHome";
import PageLogin from "./page/PageLogin";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import PageProfile from "./page/PageProfile";
import PageRegis from "./page/PageRegis";
import PageForm from "./page/PageForm";

function App() {
  return (
    <div>
      <NavG />
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/postJob" component={PageForm} />
        <PublicRoute exact path="/login" component={PageLogin} />
        <PublicRoute exact path="/register" component={PageRegis} />
        <PrivateRoute exact path="/profile" component={PageProfile} />
      </Switch>
    </div>
  );
}

export default App;
