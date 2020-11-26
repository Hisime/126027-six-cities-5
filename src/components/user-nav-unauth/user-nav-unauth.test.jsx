import React from "react";
import renderer from "react-test-renderer";
import {UserNavUnauth} from "./user-nav-unauth";

it(`Should UserNavUnauth render correctly`, () => {
  const tree = renderer
    .create(<UserNavUnauth/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
