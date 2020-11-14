export const ActionType = {
  SET_CITY: `SET_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  TOGGLE_SORT: `TOGGLE_SORT`,
  SET_SORT: `SET_SORT`,
};

export const ActionCreator = {
  setCity: (id) => ({
    type: ActionType.SET_CITY,
    payload: id,
  }),
  getOffers: (id) => ({
    type: ActionType.GET_OFFERS,
    payload: id,
  }),
  toggleSort: () => ({
    type: ActionType.TOGGLE_SORT,
  }),
  setSort: (id) => ({
    type: ActionType.SET_SORT,
    payload: id,
  })
};
