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
    const [firstOffer] = offers;
    const cityLocation = firstOffer.city.location;
    const center = [
      cityLocation.latitude,
      cityLocation.longitude,
    ];
    const {zoom} = cityLocation;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39],
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39],
    });
    const map = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true,
    });
    const layerGroup = leaflet.layerGroup().addTo(map);
    map.setView(center, zoom);
    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(map);

    offers.forEach(({location}) => {
      leaflet.marker([location.latitude, location.longitude], {icon}).addTo(layerGroup);
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
    const {offers, activeOfferId} = this.props;
    const {icon, activeIcon, layerGroup} = this;
    const [firstOffer] = offers;
    const cityLocation = firstOffer.city.location;
    const center = [
      cityLocation.latitude,
      cityLocation.longitude,
    ];
    const {zoom} = cityLocation;
    const isActive = this.isActive;
    layerGroup.clearLayers();
    this.map.setView(center, zoom);
    offers.forEach((offer) => {
      const {location, id} = offer;
      const curIcon = isActive(id, activeOfferId) ? activeIcon : icon;
      leaflet.marker([location.latitude, location.longitude], {icon: curIcon}).addTo(layerGroup);
    });
  }

  render() {
    return <div id="map" style={{height: `100%`}}/>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  activeOfferId: PropTypes.number.isRequired,
};

const mapStateToProps = ({ACTIVE_OFFER}) => ({
  activeOfferId: ACTIVE_OFFER.activeOfferId,
});

export {Map};
export default connect(mapStateToProps)(Map);
