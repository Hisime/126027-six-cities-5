import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {ReviewForm} from "./review-form";
import {Ratings} from "../../consts";
import {noop} from "../../test-mocks/mocks";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`ReviewForm works correctly`, () => {
  const handleSubmit = jest.fn(() => new Promise(() => {}));
  const submitEvent = {
    preventDefault: noop,
    persist: noop,
    target: {
      reset: noop,
    },
  };
  const reviewForm = shallow(
      <ReviewForm
        id={`1`}
        ratingList={Ratings}
        onSendComment={handleSubmit}/>
  );

  it(`Should form be sent`, () => {
    const form = reviewForm.find(`.reviews__form`);

    form.simulate(`submit`, submitEvent);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
