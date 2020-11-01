import offers from '../mocks/offers';
import cities from '../mocks/cities';
import {ActionType} from '../store/action';
import {extend} from '../utils';

const initialState = {
  currentCity: cities[0],
  offers: offers[0]
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
  }

  return state;
};


export {reducer};
