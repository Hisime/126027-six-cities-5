import React from "react";
import renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../consts";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history/browser-history";
import {mockStore} from "../../test-mocks/mockStore";
import {Provider} from "react-redux";
import {offersMock} from "../../test-mocks/offers";
import leaflet from 'leaflet';
import {Room} from "./room";
import {match, noop} from "../../test-mocks/mocks";
import {reviewsMock} from "../../test-mocks/reviews";

leaflet.map = () => ({
  setView: () => {},
  addLayer: () => {},
});

it(`Should Room render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <Router history={browserHistory}>
            <Room
              fetchData={noop}
              reviews={reviewsMock}
              offer={offersMock[0]}
              switchFavorite={noop}
              nearbyOffers={offersMock.slice(0, 3)}
              match={match}
              authStatus={AuthorizationStatus.AUTH}/>
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
