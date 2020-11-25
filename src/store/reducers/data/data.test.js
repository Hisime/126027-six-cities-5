import {
  ActionType,
  FilterActions,
  getComments,
  getFavorites,
  getNearbyOffers,
  getOffer,
  getOffers,
  redirectToRoute,
  setOffer,
  UserActions,
} from "../../action";
import {APIRoute, AuthorizationStatus, City, FavoritesResponseType, SortType} from "../../../consts";
import {offersMock} from "../../../test-mocks/offers";
import {reviewsMock} from "../../../test-mocks/reviews";
import {user} from "../user/user";
import {createAPI} from "../../../services/api";
import MockAdapter from "axios-mock-adapter";
import {
  fetchFavorites,
  fetchNearbyOffers,
  fetchOffer,
  fetchOffers,
  fetchReviews, sendComment,
  toggleFavorite,
} from "../../api-actions";


describe(`FilterActions works correctly`, () => {
  it(`action setCity sets correct id`, () => {
    expect(FilterActions.setCity(City.PARIS)).toEqual({
      type: ActionType.SET_CITY,
      payload: City.PARIS,
    });
  });

  it(`action toggleSort toggles sort list`, () => {
    expect(FilterActions.toggleSort()).toEqual({
      type: ActionType.TOGGLE_SORT,
    });
  });

  it(`action setSort sets correct sortType`, () => {
    expect(FilterActions.setSort(SortType.POPULAR)).toEqual({
      type: ActionType.SET_SORT,
      payload: SortType.POPULAR,
    });
  });
});

describe(`UserActions works correctly`, () => {
  it(`action requireAuthorization sets correct status`, () => {
    expect(UserActions.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`action setUser sets correct user`, () => {
    expect(UserActions.setUser(user)).toEqual({
      type: ActionType.SET_USER,
      payload: user,
    });
  });
});

it(`action getComments sets data`, () => {
  expect(getComments(reviewsMock)).toEqual({
    type: ActionType.GET_COMMENTS,
    payload: reviewsMock,
  });
});

it(`action getNearbyOffers sets data`, () => {
  expect(getNearbyOffers(offersMock)).toEqual({
    type: ActionType.GET_NEARBY_OFFERS,
    payload: offersMock,
  });
});

it(`action getOffer sets data`, () => {
  expect(getOffer(offersMock[0])).toEqual({
    type: ActionType.GET_OFFER,
    payload: offersMock[0],
  });
});

it(`action getFavorites sets data`, () => {
  expect(getFavorites(offersMock)).toEqual({
    type: ActionType.GET_FAVORITES,
    payload: offersMock,
  });
});

it(`action getOffers sets data`, () => {
  expect(getOffers(offersMock)).toEqual({
    type: ActionType.GET_OFFERS,
    payload: offersMock,
  });
});

it(`action setOffer sets new offer to offersList`, () => {
  expect(setOffer(offersMock[0], FavoritesResponseType.MAIN)).toEqual({
    type: ActionType.SET_OFFER,
    payload: {offer: offersMock[0], type: FavoritesResponseType.MAIN},
  });
});

it(`action redirectToRoute redirects to url`, () => {
  expect(redirectToRoute(`/`)).toEqual({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: `/`,
  });
});

const api = createAPI(() => {
});

describe(`Async actions works correctly`, () => {

  it(`should fetch favorites`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeData = [{fake: true}];
    const favoritesLoader = fetchFavorites();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, fakeData);

    return favoritesLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_FAVORITES,
          payload: fakeData,
        });
      });
  });

  it(`should fetch offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeData = [{fake: true}];
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, fakeData);

    return offersLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_OFFERS,
          payload: fakeData,
        });
      });
  });

  it(`should fetch offer`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeData = [{fake: true}];
    const id = 1;
    const offerLoader = fetchOffer(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}`)
      .reply(200, fakeData);

    return offerLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_OFFER,
          payload: fakeData,
        });
      });
  });

  it(`should toggle favorite offer`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeData = offersMock[0];
    const id = 1;
    const status = false;
    const numberStatus = 1;
    const type = FavoritesResponseType.OFFER;
    const toggler = toggleFavorite(id, status, type);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${id}/${numberStatus}`)
      .reply(200, fakeData);

    return toggler(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFER,
          payload: {offer: offersMock[0], type: FavoritesResponseType.OFFER},
        });
      });
  });

  it(`should fetch nearby offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeData = [{fake: true}];
    const id = 1;
    const nearbyOffersLoader = fetchNearbyOffers(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY_OFFERS}`)
      .reply(200, fakeData);

    return nearbyOffersLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_NEARBY_OFFERS,
          payload: fakeData,
        });
      });
  });

  it(`should fetch reviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeData = [{fake: true}];
    const id = 1;
    const reviewsLoader = fetchReviews(id);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, fakeData);

    return reviewsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_COMMENTS,
          payload: fakeData,
        });
      });
  });

  it(`should send comment`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeData = [{fake: true}];
    const id = 1;
    const commentBody = {
      rating: 5,
      comment: `TEST`,
    };
    const commentSender = sendComment(id, commentBody);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${id}`, commentBody)
      .reply(200, fakeData);

    return commentSender(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_COMMENTS,
          payload: fakeData,
        });
      });
  });
});
