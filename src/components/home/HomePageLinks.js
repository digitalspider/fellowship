import React from 'react';
import './HomePageLinks.css';
import { Link } from 'react-router-dom';


const HomePageLinks = (props) => {
  return (
    <div className="row links">
      <Link to="/covid19" className="tile homepage-text covid">
        <div className="tile-text">COVID-19 update</div>
      </Link>
      <Link to="/about/ministry" className="tile homepage-text church">
        <div className="tile-text">Church Ministries</div>
      </Link>
      <Link to="/sermons" className="tile homepage-text sermon">
        <div className="tile-text">Sermons</div>
      </Link>
      <Link to="/contact" className="tile homepage-text contact">
        <div className="tile-text">Contact Us</div>
      </Link>
    </div>
  )
}

export default HomePageLinks;
