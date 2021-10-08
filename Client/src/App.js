import React from "react";
import {Route, Switch} from 'react-router-dom'
import PageHome from './page/PageHome'
import PageLogin from './page/PageLogin'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={PageHome}/>
        <PublicRoute exact path="/login" component={PageLogin}/>
      </Switch>
    </div>
  );
}

export default App;
