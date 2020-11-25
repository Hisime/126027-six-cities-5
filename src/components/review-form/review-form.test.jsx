import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";
import {noop} from "../../test-mocks/mocks";
import Rating from "../../mocks/rating";

it(`Should ReviewForm render correctly`, () => {
  const tree = renderer
    .create(<ReviewForm
      id={`1`}
      sendComment={noop}
      ratingList={Rating}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
