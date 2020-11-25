import {Cities, FavoritesResponseTypes} from "../../../consts";
import {ActionType} from "../../action";
import {extend} from "../../../utils";
import sortList from "../../../mocks/sort-list";
import {replaceOffer} from "../../selectors/selectors";
import Rating from "../../../mocks/rating";

const initialState = {
  cities: [
    Cities.PARIS,
    Cities.COLOGNE,
    Cities.BRUSSELS,
    Cities.AMSTERDAM,
    Cities.HAMBURG,
    Cities.DUSSELDORF,
  ],
  offers: [],
  currentOffers: null,
  offer: null,
  comments: null,
  sortList,
  currentCity: Cities.PARIS,
  currentSort: sortList[0].value,
  isSortOpen: false,
  ratingList: Rating,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFER:
      const {
        payload: {
          offer,
          type,
        }
      } = action;
      switch (type) {
        case FavoritesResponseTypes.OFFER:
          return extend(state, {
            offer,
          });
        case FavoritesResponseTypes.MAIN:
          return extend(state, {
            offers: replaceOffer(offer, state.offers),
          });
        default: {
          return extend(state, {
            currentOffers: replaceOffer(offer, state.currentOffers),
          });
        }
      }
    case ActionType.GET_FAVORITES:
      return extend(state, {
        currentOffers: action.payload,
      });
    case ActionType.GET_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    case ActionType.GET_OFFER:
      return extend(state, {
        offer: action.payload,
      });
    case ActionType.GET_NEARBY_OFFERS:
      return extend(state, {
        currentOffers: action.payload,
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.SET_CITY:
      const city = action.payload;
      return extend(state, {
        currentCity: city,
      });
    case ActionType.TOGGLE_SORT:
      return extend(state, {
        isSortOpen: !state.isSortOpen,
      });
    case ActionType.SET_SORT:
      const sortNewType = action.payload;
      return extend(state, {
        currentSort: sortNewType,
      });
  }
  return state;
};

export {data};
