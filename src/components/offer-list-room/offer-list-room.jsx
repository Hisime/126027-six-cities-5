import React from "react";
import {OfferCard} from "../offer-card/offer-card";
import PropTypes from "prop-types";
import {offerPropType} from "../../propTypes";

export const OfferListRoom = (props) => {
  const {offers, onMouseEnterHandler} = props;
  const classNames = {
    placeCard: `near-places__card`,
    placeCardImageWrapper: `near-places__image-wrapper`,
  };
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnterHandler={onMouseEnterHandler}
          classNames={classNames}
        ></OfferCard>
      ))}
    </div>
  );
};

OfferListRoom.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  onMouseEnterHandler: PropTypes.func,
};
