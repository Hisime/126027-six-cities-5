import React from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";
import {offerPropType} from "../../propTypes";
import {FavoritesResponseTypes} from "../../consts";

export const OfferListFavorites = (props) => {
  const {offers, onMouseEnterHandler, onMouseLeaveHandler} = props;
  const favoritesResponseType = FavoritesResponseTypes.FAVORITES;
  const classNames = {
    placeCard: `favorites__card`,
    placeCardImageWrapper: `favorites__image-wrapper`,
    cardInfo: `favorites__card-info`,
  };
  const imgSize = {
    width: 150,
    height: 110,
  };
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <OfferCard
          imgSize={imgSize}
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

OfferListFavorites.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  onMouseEnterHandler: PropTypes.func,
  onMouseLeaveHandler: PropTypes.func,
};
