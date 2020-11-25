import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {ReviewForm} from "./review-form";
import Rating from "../../mocks/rating";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`ReviewForm works correctly`, () => {
  const handleSubmit = jest.fn();
  const reviewForm = shallow(
      <ReviewForm
        id={`1`}
        sendComment={handleSubmit}
        ratingList={Rating}
      />
  );

  it(`Should rating changes`, () => {
    reviewForm.setState({rating: 2});
    expect(reviewForm.state().rating).toBe(2);
  });

  it(`Should form be sent`, () => {
    const form = reviewForm.find(`.reviews__form`);

    form.simulate(`submit`, {preventDefault: () => {}});
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
