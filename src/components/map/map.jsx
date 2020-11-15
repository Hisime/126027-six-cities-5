import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../propTypes";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import {connect} from "react-redux";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {offers} = this.props;
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39],
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39],
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });
    const layerGroup = leaflet.layerGroup().addTo(map);
    map.setView(city, zoom);
    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(map);

    offers.forEach(function ({coords}) {
      leaflet.marker(coords, {icon}).addTo(layerGroup);
    });
    this.layerGroup = layerGroup;
    this.map = map;
    this.icon = icon;
    this.activeIcon = activeIcon;
  }

  isActive(offer, activeOffer) {
    return offer === activeOffer;
  }

  componentDidUpdate() {
    const {offers, activeOfferCard} = this.props;
    const {icon, activeIcon, layerGroup} = this;
    const isActive = this.isActive;
    layerGroup.clearLayers();
    offers.forEach(function (offer) {
      const {coords} = offer;
      const curIcon = isActive(offer, activeOfferCard) ? activeIcon : icon;
      leaflet.marker(coords, {icon: curIcon}).addTo(layerGroup);
    });
  }

  render() {
    return <div id="map" style={{height: `100%`}}/>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  activeOfferCard: offerPropType,
};

const mapStateToProps = (state) => ({
  activeOfferCard: state.activeOffer,
});

export {Map};

export default connect(mapStateToProps)(Map);
