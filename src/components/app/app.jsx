import React from "react";
import {Router as BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import {Favorites} from "../favorites/favorites";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history/browser-history";
import {AppRoute} from "../../consts";

export const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.LOGIN} exact render={() => <Login/>}/>
        {/* <Route path="/offer/:id" exact>
          <Room offer={offers[0]} otherPlaces={otherPlaces}/>
        </Route> */}
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <Favorites/>
            );
          }}
        />
        <Route path={AppRoute.MAIN}>
          <Main/>
        </Route>
        <Route path="/">
          <Redirect to={AppRoute.MAIN}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
