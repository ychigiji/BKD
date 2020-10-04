import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { Component } from "react";
import L from "leaflet";

const pointerIcon = new L.Icon({
  iconUrl: require("./images/Products&Services/map.png"),
  iconRetinaUrl: require("./images/Products&Services/map.png"),
  popupAnchor: new L.Point(0, 0),
  iconSize: new L.Point(80, 70),
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});

class DMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: -26.0239372,
      lng: 27.9659542,
      zoom: 15
    };
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <h3 className="visit-us">Pay us a visit:</h3>

        <Map
          className="map"
          animate={true}
          center={position} //array like this = { }
          zoom={this.state.zoom}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker
            onclick={() => console.log("edited")}
            icon={pointerIcon}
            position={[this.state.lat, this.state.lng]}
          >
            <Popup>
              <span>BrandKraft Designs</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
export default DMap;
