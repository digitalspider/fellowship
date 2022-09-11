import React from 'react';
import './Map.css';

class Map extends React.Component {
  render() {
    const API_KEY = '__API_KEY__';
    return (
      <iframe
        title="Fellowship Baptist Church"
        width="100%"
        height="400"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Fellowship+Baptist+Church,+Frederick+Street,+Blacktown NSW&center=-33.7530345,150.9237903&zoom=15`}
        allowFullScreen
      ></iframe>
    );
  }
}

export default Map;
