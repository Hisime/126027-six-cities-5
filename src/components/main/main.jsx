import React from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../propTypes";
import OfferList from '../offer-list/offer-list';
import {Map} from '../map/map';
import {offerListTypes} from '../../consts';
import CitiesList from '../cities-list/cities-list';
import {connect} from "react-redux";
import Sort from "../sort/sort";

export const Main = (props) => {
  const {offers, currentCity} = props;
  const rentCount = offers.length;
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentCount} places to stay in {currentCity}</b>
              <Sort/>
              <OfferList offers={offers} type={offerListTypes.MAIN}></OfferList>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offers: state.offers,
});

export default connect(mapStateToProps)(Main);


Main.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  currentCity: PropTypes.string.isRequired,
};
