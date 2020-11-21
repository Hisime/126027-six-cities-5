import React from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";
import {offerPropType} from "../../propTypes";
import {FavoritesResponseTypes} from "../../consts";

export const OfferListMain = (props) => {
  const {offers, onMouseEnterHandler, onMouseLeaveHandler} = props;
  const favoritesResponseType = FavoritesResponseTypes.MAIN;
  const classNames = {
    placeCard: `cities__place-card`,
    placeCardImageWrapper: `cities__image-wrapper`,
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          favoritesResponseType={favoritesResponseType}
          key={offer.id}
          offer={offer}
          onMouseEnterHandler={onMouseEnterHandler}
          onMouseLeaveHandler={onMouseLeaveHandler}
          classNames={classNames}
        />
      ))}
    </div>
  );
};

OfferListMain.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  onMouseEnterHandler: PropTypes.func,
  onMouseLeaveHandler: PropTypes.func,
};
