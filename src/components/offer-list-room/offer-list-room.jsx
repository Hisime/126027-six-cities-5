import React from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";
import {offerPropType} from "../../propTypes";
import {FavoritesResponseType} from "../../consts";

export const OfferListRoom = (props) => {
  const {offers, onMouseEnterHandler, onMouseLeaveHandler} = props;
  const favoritesResponseType = FavoritesResponseType.NEARBY_OFFERS;
  const classNames = {
    placeCard: `near-places__card`,
    placeCardImageWrapper: `near-places__image-wrapper`,
  };
  return (
    <div className="near-places__list places__list">
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

OfferListRoom.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  onMouseEnterHandler: PropTypes.func,
  onMouseLeaveHandler: PropTypes.func,
};
