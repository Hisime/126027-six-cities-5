import {
  getComments,
  getFavorites,
  getNearbyOffers,
  getOffer,
  getOffers,
  redirectToRoute,
  setOffer,
  UserActions,
} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../consts";
import browserHistory from "../browser-history/browser-history";
import {getUserAuthStatus} from "./selectors/selectors";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(getOffers(data)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(getOffer(data)))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FAVORITE}`)
    .then(({data}) => dispatch(getFavorites(data)))
);

export const toggleFavorite = (id, status, type) => (dispatch, _getState, api) => {
  const isAuth = getUserAuthStatus(_getState()) === AuthorizationStatus.AUTH;
  if (isAuth) {
    const numberStatus = +!status;
    return api.post(`${APIRoute.FAVORITE}/${id}/${numberStatus}`)
      .then(({data}) => dispatch(setOffer(data, type)));
  } else {
    browserHistory.push(AppRoute.LOGIN);
    return false;
  }
};

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY_OFFERS}`)
    .then(({data}) => dispatch(getNearbyOffers(data)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(getComments(data)))
);

export const sendComment = (id, commentBody) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, commentBody)
    .then(({data}) => dispatch(getComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(UserActions.setUser(data)))
    .then(() => dispatch(UserActions.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(UserActions.setUser(data)))
    .then(() => dispatch(UserActions.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);
