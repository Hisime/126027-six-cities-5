import leaflet from 'leaflet';
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {App} from "./app";
import {Provider} from "react-redux";
import {mockStore} from "../../test-mocks/mockStore";

leaflet.map = () => ({
  setView: () => {},
  addLayer: () => {},
});

it(`Should AuthRoute render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
