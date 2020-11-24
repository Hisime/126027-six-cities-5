import React from "react";
import renderer from "react-test-renderer";
import {reviewsMock} from "../../test-mocks/reviews";
import {ReviewsList} from "./reviews-list";

it(`Should ReviewsList render correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={reviewsMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
