import React from "react";
import renderer from "react-test-renderer";
import {offersMock} from "../../test-mocks/offers";
import {Map} from "./map";
import leaflet from 'leaflet';

leaflet.map = () => ({
  setView: () => {},
  addLayer: () => {},
});

it(`Should Map render correctly`, () => {
  const tree = renderer
    .create(
        <Map
          activeOfferId={1}
          offers={offersMock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
