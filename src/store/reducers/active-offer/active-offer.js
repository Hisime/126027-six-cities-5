import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  activeOfferId: Infinity,
};

const activeOffer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_OFFER:
      const offerId = action.payload;
      return extend(state, {
        activeOfferId: offerId,
      });
    case ActionType.RESET_ACTIVE_OFFER:
      return extend(state, {
        activeOfferId: Infinity,
      });
  }
  return state;
};

export {activeOffer};
