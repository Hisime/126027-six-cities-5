import offers from '../mocks/offers';
import cities from '../mocks/cities';
import {ActionType} from '../store/action';
import {extend} from '../utils';
import sortList from '../mocks/sort-list';

const initialState = {
  currentCity: cities[0],
  offers: offers[0],
  currentSort: sortList[0],
  isSortOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      const offerId = action.payload;
      return extend(state, {
        offers: offers[offerId],
      });
    case ActionType.SET_CITY:
      const cityId = action.payload;
      return extend(state, {
        currentCity: cities[cityId],
      });
    case ActionType.TOGGLE_SORT:
      return extend(state, {
        isSortOpen: !state.isSortOpen
      });
    case ActionType.SET_SORT:
      const sortId = action.payload;
      return extend(state, {
        currentSort: sortList[sortId]
      });
  }
  return state;
};


export {reducer};
