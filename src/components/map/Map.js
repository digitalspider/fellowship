import React from 'react';
import { withScriptjs, withGoogleMap } from "react-google-maps";
import './Map.css';

class Map extends React.Component {
  render() {
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <iframe title="Fellowship Baptist Church"
        width="100%"
        height="400"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyARjU5xBCplgOPHWJUhRTKNRglNrrlaL1Y&center=-33.7530345,150.9237903&zoom=15" allowfullscreen>
      </iframe>
      // <GoogleMap
      //   defaultZoom={15}
      //   defaultCenter={{ lat: -33.7530345, lng: 150.9237903 }}
      //   defaultOptions={{ styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }] }}
      // >
      //   {props.isMarkerShown && <Marker position={{ lat: -33.7530345, lng: 150.9237903 }} title="Fellowship Baptist Church" />}
      // </GoogleMap>
    ))

    var className = "";

    if (this.props.fullWidth) {
      className = "full-width-map"
    }

    return (<div className={className}><MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyARjU5xBCplgOPHWJUhRTKNRglNrrlaL1Y"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    /></div>)
  }
}

export default Map;
