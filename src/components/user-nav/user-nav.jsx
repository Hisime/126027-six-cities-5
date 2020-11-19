import React from "react";
import userNavProp from './user-nav.prop';
import UserNavAuth from '../user-nav-auth/user-nav-auth';
import UserNavUnauth from "../user-nav-unauth/user-nav-unauth";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../consts";

const UserNav = (props) => {
  const {user} = props;
  const getComponentByType = () => {
    if (user) {
      return <UserNavAuth user={user}/>;
    }
    return <UserNavUnauth/>;
  };
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
        {getComponentByType()}
      </Link>
    </li>
  );
};

export {UserNav};

const mapStateToProps = ({USER}) => ({
  user: USER.user,
});

UserNav.propTypes = userNavProp;

export default connect(mapStateToProps)(UserNav);

