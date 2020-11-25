import {Link} from "react-router-dom";
import {AppRoute} from "../../consts";
import React from "react";

const LogoFooter = () => {
  return (
    <Link className="footer__logo-link" to={AppRoute.MAIN}>
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
    </Link>
  );
};

export {LogoFooter};
