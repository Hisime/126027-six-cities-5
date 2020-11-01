import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import {Login} from "../login/login";
import {Favorites} from "../favorites/favorites";
import {Room} from "../room/room";
import {offerPropType} from "../../propTypes";

export const App = (props) => {
  const {offers} = props;
  const otherPlaces = props.offers.slice(1, 4);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/offer/:id" exact>
          <Room offer={offers[0]} otherPlaces={otherPlaces}/>
        </Route>
        <Route path="/favorites" exact>
          <Favorites/>
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
};
