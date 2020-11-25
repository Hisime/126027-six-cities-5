import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./private-route";
import {AppRoute, AuthorizationStatus} from "../../consts";

it(`Should PrivateRoute render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PrivateRoute
            exact
            path={AppRoute.FAVORITES}
            authorizationStatus={AuthorizationStatus.AUTH}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
