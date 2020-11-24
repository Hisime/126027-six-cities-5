import {AppRoute} from "../../consts";
import {Link} from "react-router-dom";
import React from "react";

const Logo = () => {
  return (
    <Link className="header__logo-link header__logo-link--active" to={AppRoute.MAIN}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
};

export {Logo};
