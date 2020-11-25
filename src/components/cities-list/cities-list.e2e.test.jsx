import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CitiesList} from "./cities-list";
import {citiesMock} from "../../test-mocks/mocks";
import React from "react";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should city button be pressed`, () => {
  const handleCityClick = jest.fn();

  const citiesList = shallow(
      <CitiesList
        currentCity={citiesMock[0]}
        cities={citiesMock}
        setCity={handleCityClick}/>
  );

  const cityButton = citiesList.find(`.locations__item:first-child > .locations__item-link`);

  cityButton.simulate(`click`);
  expect(handleCityClick).toHaveBeenCalledTimes(1);
});
