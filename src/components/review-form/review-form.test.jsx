import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";
import {noop} from "../../test-mocks/mocks";
import {Ratings} from "../../consts";

it(`Should ReviewForm render correctly`, () => {
  const tree = renderer
    .create(<ReviewForm
      id={`1`}
      sendComment={noop}
      ratingList={Ratings}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
