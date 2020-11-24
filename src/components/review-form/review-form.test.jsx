import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";
import {offersMock} from "../../test-mocks/offers";
import {noop} from "../../test-mocks/mocks";
import Rating from "../../mocks/rating";

it(`Should ReviewForm render correctly`, () => {
  const tree = renderer
    .create(<ReviewForm
      id={offersMock[0].id}
      sendComment={noop}
      ratingList={Rating}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
