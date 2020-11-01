export const ActionType = {
  SET_CITY: `SET_CITY`,
  GET_OFFERS: `GET_OFFERS`,
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
};
