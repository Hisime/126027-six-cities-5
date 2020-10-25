import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Main} from "../main/main";
import {Login} from "../login/login";
import {Favorites} from "../favorites/favorites";
import {Room} from "../room/room";
import {offerPropType} from "../../propTypes";

export const App = (props) => {
  const {rentCount, offers} = props;
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
          <Main rentCount={rentCount} offers={offers}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerPropType).isRequired,
};
