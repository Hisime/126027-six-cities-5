import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites";
import {noop} from "../../test-mocks/mocks";
import {offersWithCity} from "../../test-mocks/offers-with-city";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history/browser-history";
import {Provider} from "react-redux";
import {mockStore} from "../../test-mocks/mockStore";

it(`Should Favorites render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <Router history={browserHistory}>
            <Favorites
              setCity={noop}
              getFavoritesData={noop}
              offersWithCities={offersWithCity}
            />
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
