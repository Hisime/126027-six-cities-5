import {combineReducers} from "redux";
import {data} from "./data/data";
import {activeOffer} from "./active-offer/active-offer";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  ACTIVE_OFFER: `ACTIVE_OFFER`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.ACTIVE_OFFER]: activeOffer,
  [NameSpace.USER]: user,
});
