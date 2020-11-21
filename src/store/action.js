export const ActionType = {
  SET_CITY: `SET_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_OFFER: `GET_OFFER`,
  GET_FAVORITES: `GET_FAVORITES`,
  GET_NEARBY_OFFERS: `GET_NEARBY_OFFERS`,
  GET_COMMENTS: `GET_COMMENTS`,
  SET_OFFER: `SET_OFFER`,
  TOGGLE_SORT: `TOGGLE_SORT`,
  SET_SORT: `SET_SORT`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  RESET_ACTIVE_OFFER: `RESET_ACTIVE_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  FILTER_OFFERS: `FILTER_OFFERS`,
  SET_USER: `SET_USER`,
};

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const ActiveCardActions = {
  setActiveOfferId: (id) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: id,
  }),
  resetActiveOffer: () => ({
    type: ActionType.RESET_ACTIVE_OFFER,
  }),
};

export const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers,
});

export const setOffer = (offer, type) => ({
  type: ActionType.SET_OFFER,
  payload: {offer, type},
});

export const getFavorites = (offers) => ({
  type: ActionType.GET_FAVORITES,
  payload: offers,
});

export const getOffer = (offer) => ({
  type: ActionType.GET_OFFER,
  payload: offer,
});

export const getNearbyOffers = (offers) => ({
  type: ActionType.GET_NEARBY_OFFERS,
  payload: offers,
});

export const getComments = (comments) => ({
  type: ActionType.GET_COMMENTS,
  payload: comments,
});

export const userActions = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user,
  }),
};

export const filterActions = {
  setCity: (id) => ({
    type: ActionType.SET_CITY,
    payload: id,
  }),
  toggleSort: () => ({
    type: ActionType.TOGGLE_SORT,
  }),
  setSort: (sortType) => ({
    type: ActionType.SET_SORT,
    payload: sortType,
  }),
};
