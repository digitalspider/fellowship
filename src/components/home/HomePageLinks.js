import React from 'react';
import './HomePageLinks.css';
import { Link } from 'react-router-dom';


const HomePageLinks = (props) => {
  return (
    <div className="row">
      <Link to="/covid19" className="col-md homepage-text about">
        <h3>COVID-19 update</h3>
      </Link>
      <Link to="/about/ministry" className="col-md homepage-text vision">
        <h3>Church Ministries</h3>
      </Link>
      <Link to="/sermons" className="col-md homepage-text about">
        <h3>Sermons</h3>
      </Link>
      <Link to="/contact" className="col-md homepage-text vision">
        <h3>Contact Us</h3>
      </Link>
    </div>
  )
}

export default HomePageLinks;
