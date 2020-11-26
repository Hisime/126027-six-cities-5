import React from "react";
import {Redirect, Route, Router as BrowserRouter, Switch} from "react-router-dom";
import Main from "../main/main";
import PropTypes from 'prop-types';
import Favorites from "../favorites/favorites";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history/browser-history";
import {AppRoute} from "../../consts";
import AuthRoute from "../auth-route/auth-route";
import Login from "../login/login";
import Room from "../room/room";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <AuthRoute
          exact
          path={AppRoute.LOGIN}
          render={() => {
            return (
              <Login />
            );
          }}
        />
        <Route path={`${AppRoute.OFFER}/:id`} exact
          render={(props) => {
            return <Room key={props.match.params.id} {...props}/>;
          }}>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={(props) => {
            return (
              <Favorites {...props}/>
            );
          }}
        />
        <Route path={AppRoute.MAIN} component={Main}/>
        <Route path="/">
          <Redirect to={AppRoute.MAIN}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  match: PropTypes.object,
};

export {App};
