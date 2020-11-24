import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../consts";
import {AuthRoute} from "./auth-route";

it(`Should AuthRoute render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <AuthRoute
            exact
            path={AppRoute.FAVORITES}
            authorizationStatus={AuthorizationStatus.AUTH}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
