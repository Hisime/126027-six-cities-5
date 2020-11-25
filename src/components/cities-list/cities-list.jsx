import React from "react";
import {connect} from "react-redux";
import {FilterActions} from "../../store/action";
import PropTypes from "prop-types";
import {Cities} from '../../consts';
import {getCities, getCurrentCity} from "../../store/selectors/selectors";

const CitiesList = (props) => {
  const {currentCity, setCity, cities} = props;
  const isActive = (city) => {
    return city === currentCity;
  };
  const cityClickHandler = (city) => {
    setCity(city);
  };
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => (
          <li key={`${city}-${index}`} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${
                isActive(city) ? `tabs__item--active` : ``
              }`}
              onClick={() => {
                cityClickHandler(city);
              }}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(FilterActions.setCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.oneOf([
    Cities.PARIS,
    Cities.COLOGNE,
    Cities.BRUSSELS,
    Cities.AMSTERDAM,
    Cities.HAMBURG,
    Cities.DUSSELDORF,
  ])).isRequired,
};
