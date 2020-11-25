import React from "react";
import renderer from "react-test-renderer";
import {OfferList} from "./offer-list";
import {offerListTypes} from "../../consts";
import {noop} from "../../test-mocks/mocks";
import {offersMock} from "../../test-mocks/offers";
import {mockStore} from "../../test-mocks/mockStore";
import {Provider} from "react-redux";
import browserHistory from "../../browser-history/browser-history";
import {Router} from "react-router-dom";

it(`Should OfferList render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <Router history={browserHistory}>
            <OfferList offers={offersMock}
              setActiveOfferId={noop}
              type={offerListTypes.MAIN}
            />
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
