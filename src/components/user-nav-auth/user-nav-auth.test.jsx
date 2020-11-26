import React from "react";
import renderer from "react-test-renderer";
import {user} from "../../test-mocks/mocks";
import {UserNavAuth} from "./user-nav-auth";

it(`Should UserNavAuth render correctly`, () => {
  const tree = renderer
    .create(<UserNavAuth
      user={user}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
