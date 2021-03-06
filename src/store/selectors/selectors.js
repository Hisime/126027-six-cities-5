import {createSelector} from "reselect";
import {NameSpace} from "../reducers/root-reducer";
import {SortType} from "../../consts";

export const getOffersList = (state) => state[NameSpace.DATA].offers;
export const getCurrentOffers = (state) => state[NameSpace.DATA].currentOffers;
export const getSortType = (state) => state[NameSpace.DATA].currentSort;
export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getCurrentCity = (state) => state[NameSpace.DATA].currentCity;
export const getCities = (state) => state[NameSpace.DATA].cities;
export const getUserAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUser = (state) => state[NameSpace.USER].user;
export const getRatingList = (state) => state[NameSpace.DATA].ratingList;

export const getFavoriteOffers = (state) => {
  const offers = state[NameSpace.DATA].currentOffers;
  if (!offers) {
    return offers;
  }
  const cityToOffers = {};
  offers.forEach((offer) => {
    const {
      city: {
        name,
      }
    } = offer;
    if (cityToOffers[name]) {
      cityToOffers[name].push(offer);
    } else {
      cityToOffers[name] = [offer];
    }
  });
  return cityToOffers;
};

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
    case SortType.PRICE_ASC:
      return sortedOffers.sort((a, b) => a.price - b.price);
    case SortType.PRICE_DES:
      return sortedOffers.sort((a, b) => b.price - a.price);
    case SortType.TOP_DES:
      return sortedOffers.sort((a, b) => b.rating - a.rating);
    default:
      return sortedOffers;
  }
};
