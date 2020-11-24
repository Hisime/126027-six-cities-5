import {createStore} from "redux";
import rootReducer from "../store/reducers/root-reducer";

export const mockStore = createStore(rootReducer);
