import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";
import cities from "../../mocks/cities";


const CitiesList = (props) => {
  const {currentCity, setCity, getOffers} = props;
  const isActive = (city) => {
    return city === currentCity;
  };
  const onCityClick = (id) => {
    setCity(id);
    getOffers(id);
  };
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => (
          <li key={index} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${
                isActive(city) ? `tabs__item--active` : ``
              }`}
              href="#"
              onClick={() => {
                onCityClick(index);
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
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  setCity(index) {
    dispatch(ActionCreator.setCity(index));
  },
  getOffers(index) {
    dispatch(ActionCreator.getOffers(index));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
};
