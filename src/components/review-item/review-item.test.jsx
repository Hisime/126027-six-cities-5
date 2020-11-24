import React from "react";
import renderer from "react-test-renderer";
import {ReviewItem} from "./review-item";
import {reviewsMock} from "../../test-mocks/reviews";

it(`Should ReviewItem render correctly`, () => {
  const tree = renderer
    .create(<ReviewItem
      review={reviewsMock[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
