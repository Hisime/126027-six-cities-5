import React, {Fragment} from "react";
import {userPropType} from "../../propTypes";


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

UserNavAuth.propTypes = {
  user: userPropType,
};

export {UserNavAuth};
