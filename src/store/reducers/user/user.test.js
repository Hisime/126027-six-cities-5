import {createAPI} from "../../../services/api";
import MockAdapter from "axios-mock-adapter";
import {checkAuth, login} from "../../api-actions";
import {APIRoute, AuthorizationStatus} from "../../../consts";
import {ActionType} from "../../action";

const api = createAPI(() => {
});

it(`should login`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const fakeData = [{fake: true}];
  const email = `Test@test.com`;
  const password = `qwerty12345`;
  const loginLoader = login({login: email, password});

  apiMock
    .onPost(APIRoute.LOGIN, {email, password})
    .reply(200, fakeData);

  return loginLoader(dispatch, () => {
  }, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER,
        payload: fakeData,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: `/`,
      });
    });
});

it(`should checkAuth`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const fakeData = [{fake: true}];
  const authChecker = checkAuth();

  apiMock
    .onGet(APIRoute.LOGIN)
    .reply(200, fakeData);

  return authChecker(dispatch, () => {
  }, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER,
        payload: fakeData,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
    });
});
