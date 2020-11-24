import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop} from "../../test-mocks/mocks";
import React from "react";
import {Favorites} from "./favorites";
import {offersWithCity} from "../../test-mocks/offers-with-city";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should city button be pressed`, () => {
  const handleCityClick = jest.fn();

  const favorites = shallow(
      <Favorites
        setCity={handleCityClick}
        history={{
          push: () => {},
        }}
        offersWithCities={offersWithCity}
        getFavoritesData={noop}/>
  );

  const cityButton = favorites.find(`.locations__item`).first().find(`.locations__item-link`);

  cityButton.simulate(`click`);
  expect(handleCityClick).toHaveBeenCalledTimes(1);
});
