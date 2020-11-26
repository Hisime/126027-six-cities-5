import PropTypes from "prop-types";
import {SortType} from "./consts";

/* eslint-disable */

export const userPropType = PropTypes.shape({
  avatar_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  is_pro: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
});

export const sortPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOf([
    SortType.POPULAR,
    SortType.PRICE_ASC,
    SortType.PRICE_DES,
    SortType.TOP_DES,
  ]).isRequired,
});

export const reviewPropType = PropTypes.shape({
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  user: userPropType,
});

export const locationPropType = PropTypes.shape({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
});

export const cityPropType = PropTypes.shape({
  location: locationPropType.isRequired,
  name: PropTypes.string.isRequired,
});

export const offerPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: cityPropType.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  is_premium: PropTypes.bool.isRequired,
  location: locationPropType.isRequired,
  title: PropTypes.string.isRequired,
  is_favorite: PropTypes.bool.isRequired,
  preview_image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  max_adults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  host: userPropType,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
});
