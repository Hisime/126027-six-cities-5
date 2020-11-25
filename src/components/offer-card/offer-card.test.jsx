import React from "react";
import renderer from "react-test-renderer";
import browserHistory from "../../browser-history/browser-history";
import {Router} from "react-router-dom";
import {OfferCard} from "./offer-card";
import {offersMock} from "../../test-mocks/offers";
import {FavoritesResponseType} from "../../consts";
import {noop} from "../../test-mocks/mocks";

const classNames = {
  placeCard: `cities__place-card`,
  placeCardImageWrapper: `cities__image-wrapper`,
};

it(`Should OfferCard render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <OfferCard
            offer={offersMock[0]}
            favoritesResponseType={FavoritesResponseType.MAIN}
            toggleFavorite={noop}
            onMouseEnterHandler={noop}
            onMouseLeaveHandler={noop}
            classNames={classNames}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
