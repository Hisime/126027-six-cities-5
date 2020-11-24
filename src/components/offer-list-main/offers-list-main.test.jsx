import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/mocks";
import {offersMock} from "../../test-mocks/offers";
import {mockStore} from "../../test-mocks/mockStore";
import {Provider} from "react-redux";
import browserHistory from "../../browser-history/browser-history";
import {Router} from "react-router-dom";
import {OfferListMain} from "./offer-list-main";

it(`Should OfferListMain render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <Router history={browserHistory}>
            <OfferListMain
              onMouseEnterHandler={noop}
              onMouseLeaveHandler={noop}
              offers={offersMock}/>
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
