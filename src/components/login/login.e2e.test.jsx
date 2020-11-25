import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {Login} from "./login";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should form be sent`, () => {
  const handleSubmit = jest.fn();

  const login = shallow(
      <Login onSubmit={handleSubmit} />
  );

  login.instance().loginRef.current = {
    value: 123,
  };

  login.instance().passwordRef.current = {
    value: `password`,
  };

  const loginForm = login.find(`.login__form`);

  loginForm.simulate(`submit`, {preventDefault: () => {}});
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
