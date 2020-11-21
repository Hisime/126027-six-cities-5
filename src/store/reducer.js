import offers from '../mocks/offers';
import cities from '../mocks/cities';
import {ActionType} from '../store/action';
import {extend} from '../utils';
import sortList from '../mocks/sort-list';
import {sortTypes} from '../consts';

const initialState = {
  currentCity: cities[0],
  offers: offers[0],
  defaultOffersSort: offers[0],
  currentSort: sortList[0],
  isSortOpen: false,
  activeOffer: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      const offerId = action.payload;
      const defaultOffersSort = offers[offerId];
      const sortedOffersOnInit = sortOffers(offers[offerId], defaultOffersSort, state.currentSort.value);
      return extend(state, {
        offers: sortedOffersOnInit,
        defaultOffersSort,
      });
    case ActionType.SET_CITY:
      const cityId = action.payload;
      return extend(state, {
        currentCity: cities[cityId],
      });
    case ActionType.TOGGLE_SORT:
      return extend(state, {
        isSortOpen: !state.isSortOpen,
      });
    case ActionType.SET_SORT:
      const sortId = action.payload;
      const sort = sortList[sortId];
      const sortedOffers = sortOffers(state.offers, state.defaultOffersSort, sort.value);

      return extend(state, {
        offers: sortedOffers,
        currentSort: sort,
      });
    case ActionType.SET_ACTIVE_OFFER:
      const offerCard = action.payload;
      return extend(state, {
        activeOffer: offerCard,
      });
    case ActionType.RESET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: null,
      });

  }
  return state;
};

const sortOffers = (offersList, defaultOffersList, sortType) => {
  const sortedOffers = JSON.parse(JSON.stringify(offersList));
  switch (sortType) {
    case sortTypes.POPULAR:
      return defaultOffersList;
    case sortTypes.PRICE_ASC:
      return sortedOffers.sort((a, b) => a.price - b.price);
    case sortTypes.PRICE_DES:
      return sortedOffers.sort((a, b) => b.price - a.price);
    case sortTypes.TOP_DES:
      return sortedOffers.sort((a, b) => b.rate - a.rate);
  }
  return sortedOffers;
};


export {reducer};
