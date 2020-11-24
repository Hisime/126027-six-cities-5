import {ActionType, ActiveCardActions} from "../../action";

describe(`ActiveCardActions works correctly`, () => {
  it(`action setActiveOfferId sets correct id`, () => {
    expect(ActiveCardActions.setActiveOfferId(1)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER,
      payload: 1,
    });
  });

  it(`action resetActiveOffer sets id to null`, () => {
    expect(ActiveCardActions.resetActiveOffer()).toEqual({
      type: ActionType.RESET_ACTIVE_OFFER,
    });
  });
});
