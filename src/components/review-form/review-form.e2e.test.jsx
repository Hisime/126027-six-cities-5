import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {ReviewForm} from "./review-form";
import {Ratings} from "../../consts";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`ReviewForm works correctly`, () => {
  const handleSubmit = jest.fn();
  const reviewForm = shallow(
      <ReviewForm
        id={`1`}
        sendComment={handleSubmit}
        ratingList={Ratings}
      />
  );

  it(`Should form be sent`, () => {
    const form = reviewForm.find(`.reviews__form`);
    const instance = reviewForm.instance();
    instance.ratingRef.current = {
      value: 4,
    };
    instance.commentRef.current = {
      value: `TEST`,
    };
    form.simulate(`submit`, {preventDefault: () => {}});
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
