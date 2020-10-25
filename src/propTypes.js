import PropTypes from "prop-types";
import {OfferType} from "./consts";

export const reviewPropType = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
});

export const offerPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
  premium: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  rate: PropTypes.number.isRequired,
  type: PropTypes.oneOf([
    OfferType.APARTMENT,
    OfferType.HOTEL,
    OfferType.HOUSE,
    OfferType.ROOM
  ]).isRequired,
  bedRoomsCount: PropTypes.number.isRequired,
  guestsCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  host: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    super: PropTypes.bool.isRequired,
    about: PropTypes.string.isRequired
  }),
  features: PropTypes.arrayOf(PropTypes.string),
  reviews: PropTypes.arrayOf(reviewPropType),
}).isRequired;
