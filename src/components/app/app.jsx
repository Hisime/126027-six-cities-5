import React from "react";
import propTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Main} from "../main/main";
import {Login} from "../login/login";
import {Favorites} from "../favorites/favorites";
import {Room} from "../room/room";

export const App = (props) => {
  const {rentCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/offer/:id" exact>
          <Room/>
        </Route>
        <Route path="/favorites" exact>
          <Favorites/>
        </Route>
        <Route path="/">
          <Main rentCount = {rentCount}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentCount: propTypes.number.isRequired
};
