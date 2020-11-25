import React from "react";
import renderer from "react-test-renderer";
import UserNavAuth from "./user-nav-auth";
import {user} from "../../test-mocks/mocks";

it(`Should UserNavAuth render correctly`, () => {
  const tree = renderer
    .create(<UserNavAuth
      user={user}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
