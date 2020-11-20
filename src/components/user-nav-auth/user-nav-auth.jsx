import React, {Fragment} from "react";
import userNavProp from '../user-nav/user-nav.prop';


const UserNavAuth = ({user}) => {
  const {email} = user;
  const avatarUrl = user.avatar_url;
  return (
    <Fragment>
      <div style={{backgroundImage: `url(${avatarUrl})`}} className="header__avatar-wrapper user__avatar-wrapper"/>
      <span className="header__user-name user__name">{email}</span>
    </Fragment>
  );
};

UserNavAuth.propTypes = userNavProp;

export default UserNavAuth;
