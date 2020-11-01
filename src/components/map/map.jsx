import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../propTypes";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";

export class Map extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {offers} = this.props;
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
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
  }

  componentDidUpdate() {
    const {offers} = this.props;
    const {icon, layerGroup} = this;

    layerGroup.clearLayers();
    offers.forEach(function ({coords}) {
      leaflet.marker(coords, {icon}).addTo(layerGroup);
    });
  }

  render() {
    return <div id="map" style={{height: `100%`}}></div>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
};
