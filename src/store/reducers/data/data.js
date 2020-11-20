import {Cities} from "../../../consts";
import {ActionType} from "../../action";
import {extend} from "../../../utils";
import sortList from "../../../mocks/sort-list";

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
  currentOffers: [],
  sortList,
  currentCity: Cities.PARIS,
  currentSort: sortList[0].value,
  isSortOpen: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_OFFERS:
      return extend(state, {
        currentOffers: state.offers,
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
