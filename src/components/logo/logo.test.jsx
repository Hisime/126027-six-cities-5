import React from "react";
import renderer from "react-test-renderer";
import browserHistory from "../../browser-history/browser-history";
import {Router} from "react-router-dom";
import {Logo} from "./logo";

it(`Should Logo render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <Logo/>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
