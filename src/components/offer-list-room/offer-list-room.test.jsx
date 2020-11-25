import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/mocks";
import {offersMock} from "../../test-mocks/offers";
import {mockStore} from "../../test-mocks/mockStore";
import {Provider} from "react-redux";
import browserHistory from "../../browser-history/browser-history";
import {Router} from "react-router-dom";
import {OfferListRoom} from "./offer-list-room";

it(`Should OfferListRoom render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <Router history={browserHistory}>
            <OfferListRoom
              onMouseEnterHandler={noop}
              onMouseLeaveHandler={noop}
              offers={offersMock}/>
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
