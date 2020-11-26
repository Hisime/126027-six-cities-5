import React from "react";
import {UserNavAuth} from '../user-nav-auth/user-nav-auth';
import {UserNavUnauth} from "../user-nav-unauth/user-nav-unauth";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../consts";
import {getUser} from "../../store/selectors/selectors";
import {userPropType} from "../../propTypes";

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

UserNav.propTypes = {
  user: userPropType,
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export {UserNav};
export default connect(mapStateToProps)(UserNav);

