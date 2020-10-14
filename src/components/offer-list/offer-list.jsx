import React from "react";
import {OfferCard} from "../offer-card/offer-card";
import PropTypes from "prop-types";
import {offerPropType} from "../../propTypes";

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

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} onMouseEnterHandler={this.onMouseEnterHandler}></OfferCard>
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
};
