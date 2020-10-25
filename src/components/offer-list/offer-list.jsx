import React from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../propTypes";
import {offerListTypes} from '../../consts';
import {OfferListMain} from '../offer-list-main/offer-list-main';
import {OfferListRoom} from '../offer-list-room/offer-list-room';

export class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
  }
  onMouseEnterHandler(activeCard) {
    this.setState({active: activeCard});
  }

  getComponentByType(type) {
    const {offers} = this.props;
    switch (type) {
      case offerListTypes.MAIN: {
        return <OfferListMain offers={offers} onMouseEnterHandler={this.onMouseEnterHandler}/>;
      }
      case offerListTypes.ROOM: {
        return <OfferListRoom offers={offers} onMouseEnterHandler={this.onMouseEnterHandler}/>;
      }
    }
    return ``;
  }

  render() {
    const {type} = this.props;
    return this.getComponentByType(type);
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  type: PropTypes.oneOf([offerListTypes.MAIN, offerListTypes.ROOM]).isRequired,
};
