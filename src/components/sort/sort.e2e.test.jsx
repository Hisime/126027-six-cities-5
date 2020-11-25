import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {Sort} from "./sort";
import {sortListMock} from "../../test-mocks/sort-list";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Sort works correctly`, () => {
  const toggleSortHandler = jest.fn();
  const setSortHandler = jest.fn((value) => value);
  const sort = shallow(
      <Sort
        sortList={sortListMock}
        currentSort={sortListMock[0].value}
        isSortOpen={true}
        toggleSort={toggleSortHandler}
        setSort={setSortHandler}
      />
  );

  it(`Should toggleSort, setSort be called on select sort`, () => {
    const thirdElement = sort.find(`.places__option`).at(2);
    thirdElement.simulate(`click`);
    expect(toggleSortHandler).toHaveBeenCalledTimes(1);
    expect(setSortHandler).toHaveBeenCalledTimes(1);
  });

  it(`Should setSort return correct value`, () => {
    const thirdElement = sort.find(`.places__option`).at(2);

    thirdElement.simulate(`click`);
    expect(setSortHandler).toReturnWith(sortListMock[2].value);
  });
});
