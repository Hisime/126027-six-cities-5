import React from "react";
import renderer from "react-test-renderer";
import {user} from "../../test-mocks/mocks";
import {UserNav} from "./user-nav";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history/browser-history";

it(`Should UserNav render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <UserNav
            user={user}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
