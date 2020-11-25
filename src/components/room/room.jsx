import React from "react";
import {offerPropType, reviewPropType} from "../../propTypes";
import PropTypes from "prop-types";
import {AuthorizationStatus, FavoritesResponseType, OfferListType, OfferType} from '../../consts';
import {getComments, getCurrentOffers, getOffer, getUserAuthStatus} from "../../store/selectors/selectors";
import {connect} from "react-redux";
import {fetchNearbyOffers, fetchOffer, fetchReviews, toggleFavorite} from "../../store/api-actions";
import {ReviewsList} from "../reviews-list/reviews-list";
import ReviewForm from "../review-form/review-form";
import Map from "../map/map";
import OfferList from "../offer-list/offer-list";
import {Logo} from "../logo/logo";
import UserNav from "../user-nav/user-nav";

class Room extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      fetchData,
      match: {
        params: {
          id,
        },
      },
    } = this.props;
    fetchData(id);
  }

  render() {
    const {
      authStatus,
      offer,
      switchFavorite,
      nearbyOffers,
      reviews,
      match: {
        params: {
          id,
        },
      },
    } = this.props;

    if (!offer) {
      return (
        <div className="preloader">PRELOADER</div>
      );
    }

    const imagesMax = 6;
    const {
      images,
      goods,
      host,
      rating,
      bedrooms,
      description,
      price,
    } = offer;
    const favoritesResponseType = FavoritesResponseType.OFFER;
    const isAuth = authStatus === AuthorizationStatus.AUTH;
    const type = OfferType[offer.type.toUpperCase()];
    const isPremium = offer.is_premium;
    const isFavorite = offer.is_favorite;
    const maxAdults = offer.max_adults;
    const hostAvatarUrl = host.avatar_url;
    const isHostPro = host.is_pro;
    const hostName = host.name;

    const onFavoriteClick = () => {
      switchFavorite(id, isFavorite, favoritesResponseType);
    };

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

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((imgPath, i) => {
                  if (i + 1 <= imagesMax) {
                    return <div key={`img-${i}`} className="property__image-wrapper">
                      <img className="property__image" src={imgPath} alt="Place image"/>
                    </div>;
                  }
                  return ``;
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>)}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button
                    onClick={onFavoriteClick}
                    className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`}
                    type="button">
                    <svg className="place-card__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${Math.round(rating) * 20}%`}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((feature, i) => (
                      <li key={`feature-${i}`} className="property__inside-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div
                      className={`property__avatar-wrapper user__avatar-wrapper ${isHostPro ? `property__avatar-wrapper--pro` : ``}`}>
                      <img className="property__avatar user__avatar" src={hostAvatarUrl} width="74" height="74"
                        alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {hostName}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  {reviews && (<ReviewsList reviews={reviews}/>)}
                  {isAuth && (<ReviewForm id={id}/>)}
                </section>
              </div>
            </div>
            <section className="property__map map">
              {nearbyOffers && (<Map offers={nearbyOffers}/>)}
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              {nearbyOffers && (<OfferList offers={nearbyOffers} type={OfferListType.ROOM}/>)}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Room.propTypes = {
  fetchData: PropTypes.func,
  reviews: PropTypes.arrayOf(reviewPropType),
  offer: offerPropType,
  switchFavorite: PropTypes.func,
  authStatus: PropTypes.oneOf([
    AuthorizationStatus.NO_AUTH, AuthorizationStatus.AUTH,
  ]).isRequired,
  nearbyOffers: PropTypes.arrayOf(offerPropType),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  reviews: getComments(state),
  nearbyOffers: getCurrentOffers(state),
  authStatus: getUserAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData(id) {
    dispatch(fetchOffer(id));
    dispatch(fetchNearbyOffers(id));
    dispatch(fetchReviews(id));
  },
  switchFavorite(id, isFavorite, favoritesResponseType) {
    dispatch(toggleFavorite(id, isFavorite, favoritesResponseType));
  },
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
