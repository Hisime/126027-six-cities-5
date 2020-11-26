import React from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../propTypes";
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {OfferListType} from '../../consts';
import CitiesList from '../cities-list/cities-list';
import {connect} from "react-redux";
import Sort from "../sort/sort";
import MainEmpty from "../main-empty/main-empty";
import UserNav from "../user-nav/user-nav";
import {getCurrentCity, getFilteredOffers} from "../../store/selectors/selectors";
import {Logo} from "../logo/logo";

const Main = (props) => {
  const {offers, currentCity} = props;
  const rentCount = offers.length;
  if (rentCount === 0) {
    return <MainEmpty/>;
  }
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <UserNav/>
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
              <OfferList offers={offers} type={OfferListType.MAIN}/>
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

Main.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  offers: getFilteredOffers(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
