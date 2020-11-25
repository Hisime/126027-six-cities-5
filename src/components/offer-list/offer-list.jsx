import React from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../propTypes";
import {OfferListType} from '../../consts';
import {OfferListMain} from '../offer-list-main/offer-list-main';
import {OfferListRoom} from '../offer-list-room/offer-list-room';
import {connect} from "react-redux";
import {ActiveCardActions} from "../../store/action";
import {OfferListFavorites} from "../offers-list-favorites/offers-list-favorites";

const OfferList = (props) => {
  const {type, offers, setActiveOfferId, resetActiveOffer} = props;

  const onMouseEnterHandler = (offer) => {
    setActiveOfferId(offer.id);
  };
  const onMouseLeaveHandler = () => {
    resetActiveOffer();
  };
  const getComponentByType = () => {
    switch (type) {
      case OfferListType.MAIN: {
        return <OfferListMain offers={offers} onMouseLeaveHandler={onMouseLeaveHandler}
          onMouseEnterHandler={onMouseEnterHandler}/>;
      }
      case OfferListType.ROOM: {
        return <OfferListRoom offers={offers} onMouseLeaveHandler={onMouseLeaveHandler}
          onMouseEnterHandler={onMouseEnterHandler}/>;
      }
      case OfferListType.FAVORITES: {
        return <OfferListFavorites offers={offers} onMouseLeaveHandler={onMouseLeaveHandler}
          onMouseEnterHandler={onMouseEnterHandler}/>;
      }
    }
    return ``;
  };
  return getComponentByType(type);
};


const mapDispatchToProps = (dispatch) => ({
  setActiveOfferId(id) {
    dispatch(ActiveCardActions.setActiveOfferId(id));
  },
  resetActiveOffer() {
    dispatch(ActiveCardActions.resetActiveOffer());
  },
});

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  type: PropTypes.oneOf([
    OfferListType.MAIN, OfferListType.ROOM, OfferListType.FAVORITES
  ]).isRequired,
  setActiveOfferId: PropTypes.func.isRequired,
};

export {OfferList};
export default connect(null, mapDispatchToProps)(OfferList);
