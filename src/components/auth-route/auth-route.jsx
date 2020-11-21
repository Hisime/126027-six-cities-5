import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../consts";
import {getUserAuthStatus} from "../../store/selectors/selectors";


const AuthRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.NO_AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.MAIN}/>
        );
      }}
    />
  );
};

AuthRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getUserAuthStatus(state),
});


export {AuthRoute};
export default connect(mapStateToProps)(AuthRoute);
