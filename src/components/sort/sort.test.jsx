import React from "react";
import renderer from "react-test-renderer";
import {Sort} from "./sort";
import {noop} from "../../test-mocks/mocks";
import {sortListMock} from "../../test-mocks/sort-list";

it(`Should Sort render correctly`, () => {
  const tree = renderer
    .create(<Sort
      sortList={sortListMock}
      currentSort={sortListMock[0].value}
      isSortOpen={true}
      toggleSort={noop}
      setSort={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
