import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {checkAuth, fetchOffers} from "./store/api-actions";
import {composeWithDevTools} from "redux-devtools-extension";
import {AuthorizationStatus} from "./consts";
import {Provider} from "react-redux";
import {App} from "./components/app/app";
import rootReducer from './store/reducers/root-reducer';
import {redirect} from "./store/middlewares/redirect";
import {UserActions} from "./store/action";

const api = createAPI(
    () => store.dispatch(UserActions.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchOffers()),
  store.dispatch(checkAuth()),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.getElementById(`root`)
    );
  });

