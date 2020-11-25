import {LogoType} from "../../consts";
import PropTypes from "prop-types";
import {LogoHeader} from "../logo-header/logo-header";
import {LogoFooter} from "../logo-footer/logo-footer";
import React from "react";

const Logo = (props) => {
  const {type} = props;
  const getComponentByType = () => {
    switch (type) {
      case LogoType.HEADER:
        return <LogoHeader />;
      case LogoType.FOOTER:
        return <LogoFooter />;
      default:
        return <LogoHeader />;
    }
  };
  return getComponentByType();
};

Logo.propTypes = {
  type: PropTypes.oneOf([LogoType.FOOTER, LogoType.HEADER]),
};

export {Logo};
