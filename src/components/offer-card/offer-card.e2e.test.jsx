import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {OfferCard} from "./offer-card";
import {offersMock} from "../../test-mocks/offers";
import {FavoritesResponseType} from "../../consts";

Enzyme.configure({
  adapter: new Adapter(),
});

const classNames = {
  placeCard: `cities__place-card`,
  placeCardImageWrapper: `cities__image-wrapper`,
};

describe(`OfferCard works correctly`, () => {
  const handleMouseEnter = jest.fn();
  const handleMouseLeave = jest.fn();
  const toggleFavorite = jest.fn();

  const cardComponent = shallow(
      <OfferCard
        offer={offersMock[0]}
        favoritesResponseType={FavoritesResponseType.MAIN}
        toggleFavorite={toggleFavorite}
        onMouseEnterHandler={handleMouseEnter}
        onMouseLeaveHandler={handleMouseLeave}
        classNames={classNames}
      />
  );
  it(`Should call event on mouseEnter and mouseLeave`, () => {
    const card = cardComponent.find(`article`);
    card.simulate(`mouseenter`);
    card.simulate(`mouseleave`);
    expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });

  it(`Should toggle favorite`, () => {
    const favoriteButton = cardComponent.find(`.place-card__bookmark-button`);
    favoriteButton.simulate(`click`);
    expect(toggleFavorite).toHaveBeenCalledTimes(1);
  });
});


