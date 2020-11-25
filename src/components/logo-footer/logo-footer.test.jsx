import React from "react";
import renderer from "react-test-renderer";
import browserHistory from "../../browser-history/browser-history";
import {Router} from "react-router-dom";
import {LogoFooter} from "./logo-footer";

it(`Should LogoFooter render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <LogoFooter/>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
