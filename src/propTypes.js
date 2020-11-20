import PropTypes from "prop-types";

export const reviewPropType = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
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

/* eslint-disable */
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
  host: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    is_pro: PropTypes.bool.isRequired,
  }),
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
});
