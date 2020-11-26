import React from "react";
import {connect} from "react-redux";
import {FilterActions} from "../../store/action";
import PropTypes from "prop-types";
import {City} from '../../consts';
import {getCities, getCurrentCity} from "../../store/selectors/selectors";

const CitiesList = (props) => {
  const {currentCity, setCity, cities} = props;
  const isActive = (city) => {
    return city === currentCity;
  };
  const handleCityClick = (city) => {
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
                handleCityClick(city);
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

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.oneOf([
    City.PARIS,
    City.COLOGNE,
    City.BRUSSELS,
    City.AMSTERDAM,
    City.HAMBURG,
    City.DUSSELDORF,
  ])).isRequired,
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

