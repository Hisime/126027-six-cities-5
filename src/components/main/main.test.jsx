import React from "react";
import renderer from "react-test-renderer";
import {Cities} from "../../consts";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history/browser-history";
import {mockStore} from "../../test-mocks/mockStore";
import {Provider} from "react-redux";
import {Main} from "./main";
import {offersMock} from "../../test-mocks/offers";
import leaflet from 'leaflet';

leaflet.map = () => ({
  setView: () => {},
  addLayer: () => {},
});

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <Router history={browserHistory}>
            <Main
              currentCity={Cities.PARIS}
              offers={offersMock}
            />
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
