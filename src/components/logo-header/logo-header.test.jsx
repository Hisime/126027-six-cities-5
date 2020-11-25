import React from "react";
import renderer from "react-test-renderer";
import browserHistory from "../../browser-history/browser-history";
import {Router} from "react-router-dom";
import {LogoHeader} from "./logo-header";

it(`Should LogoFooter render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <LogoHeader/>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
