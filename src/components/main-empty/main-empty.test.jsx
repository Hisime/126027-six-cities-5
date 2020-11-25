import React from "react";
import renderer from "react-test-renderer";
import {Cities} from "../../consts";
import {MainEmpty} from "./main-empty";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history/browser-history";
import {mockStore} from "../../test-mocks/mockStore";
import {Provider} from "react-redux";

it(`Should MainEmpty render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <Router history={browserHistory}>
            <MainEmpty
              currentCity={Cities.PARIS}/>
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
