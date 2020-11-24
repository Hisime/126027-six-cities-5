import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list";
import {citiesMock, noop} from "../../test-mocks/mocks";

it(`Should CitiesList render correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      cities={citiesMock}
      currentCity={citiesMock[0]}
      setCity={noop}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
