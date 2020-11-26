import React from "react";
import {getFavoriteOffers} from "../../store/selectors/selectors";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {offerPropType} from "../../propTypes";
import {Logo} from "../logo/logo";
import UserNav from "../user-nav/user-nav";
import {fetchFavorites} from "../../store/api-actions";
import {AppRoute, LogoType, OfferListType} from "../../consts";
import OfferList from "../offer-list/offer-list";
import {FilterActions} from "../../store/action";
import {FavoritesEmpty} from "../favorites-empty/favorites-empty";

class Favorites extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleCityClick = this.handleCityClick.bind(this);
  }

  componentDidMount() {
    this.props.getFavoritesData();
  }

  handleCityClick(city) {
    this.props.setCity(city);
    this.props.history.push(AppRoute.MAIN);
  }

  render() {
    const {offersWithCities} = this.props;
    if (!offersWithCities) {
      return (
        <div className="preloader">PRELOADER</div>
      );
    }
    if (Object.keys(offersWithCities).length === 0) {
      return <FavoritesEmpty/>;
    }

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo/>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <UserNav/>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(offersWithCities).map(([cityName, offers], idx) => (
                  <li key={`cityName-${idx}`} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" onClick={() => {
                          this.handleCityClick(cityName);
                        }}>
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <OfferList offers={offers} type={OfferListType.FAVORITES}/>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Logo type={LogoType.FOOTER}/>
        </footer>
      </div>
    );
  }
}

Favorites.propTypes = {
  getFavoritesData: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  offersWithCities: PropTypes.shape({
    offers: PropTypes.arrayOf(offerPropType),
  }),
};


const mapStateToProps = (state) => ({
  offersWithCities: getFavoriteOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFavoritesData() {
    dispatch(fetchFavorites());
  },
  setCity(index) {
    dispatch(FilterActions.setCity(index));
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
