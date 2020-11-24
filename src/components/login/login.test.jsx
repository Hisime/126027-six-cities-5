import React from "react";
import renderer from "react-test-renderer";
import {Login} from "./login";
import {noop} from "../../test-mocks/mocks";
import {Provider} from "react-redux";
import {mockStore} from "../../test-mocks/mockStore";
import browserHistory from "../../browser-history/browser-history";
import {Router} from "react-router-dom";

it(`Should Login render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <Router history={browserHistory}>
            <Login onSubmit={noop}/>
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
