import {createSelector} from "reselect";
import {NameSpace} from "../reducers/root-reducer";
import {sortTypes} from "../../consts";

export const getOffersList = (state) => state[NameSpace.DATA].offers;
export const getSortType = (state) => state[NameSpace.DATA].currentSort;
export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getCurrentCity = (state) => state[NameSpace.DATA].currentCity;
export const getCities = (state) => state[NameSpace.DATA].cities;
export const getUserAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUser = (state) => state[NameSpace.USER].user;

export const replaceOffer = (offer, offers) => {
  const index = offers.findIndex((item) => item.id === offer.id);
  if (index > -1) {
    offers[index] = offer;
  }
  return JSON.parse(JSON.stringify(offers));
};

export const getFilteredOffers = createSelector(
    getOffersList,
    getSortType,
    getCurrentCity,
    (offers, currentSort, currentCity) => {
      const filteredOffers = filterOffers(offers, currentCity);
      return sortOffers(filteredOffers, currentSort);
    }
);

const filterOffers = (offers, currentCity) => {
  if (!currentCity) {
    return offers;
  }
  return offers.filter((item) => {
    return item.city.name === currentCity;
  });
};

const sortOffers = (offersList, sortType) => {
  const sortedOffers = JSON.parse(JSON.stringify(offersList));
  switch (sortType) {
    case sortTypes.PRICE_ASC:
      return sortedOffers.sort((a, b) => a.price - b.price);
    case sortTypes.PRICE_DES:
      return sortedOffers.sort((a, b) => b.price - a.price);
    case sortTypes.TOP_DES:
      return sortedOffers.sort((a, b) => b.rate - a.rate);
    default:
      return sortedOffers;
  }
};
