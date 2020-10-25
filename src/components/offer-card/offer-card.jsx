import React from "react";
import {offerPropType} from "../../propTypes";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export const OfferCard = (props) => {
  const {offer, onMouseEnterHandler, classNames} = props;
  const {
    premium,
    pictures,
    price,
    favorite,
    rate,
    title,
    type,
  } = offer;
  const [picture] = pictures;
  return (
    <article className={`place-card ${classNames.placeCard}`} onMouseEnter={() => {
      onMouseEnterHandler(offer);
    }}>
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`place-card__image-wrapper ${classNames.placeCardImageWrapper}`}>
        <Link to="/offer/1">
          <img className="place-card__image" src={picture.src} width="260" height="200" alt={picture.alt}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${favorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rate * 20}px`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/offer/1">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropType,
  onMouseEnterHandler: PropTypes.func,
  classNames: PropTypes.shape({
    placeCard: PropTypes.string,
    placeCardImageWrapper: PropTypes.string,
  }).isRequired,
};
