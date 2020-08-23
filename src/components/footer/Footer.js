import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/about">About</Link><span className="footer-link-slash">/</span>
        <Link to="/events">What's On</Link><span className="footer-link-slash">/</span>
        <Link to="/sermons">Sermons</Link><span className="footer-link-slash">/</span>
        <Link to="/contact">Contact</Link><span className="footer-link-slash">/</span>
        <Link to="/giving">Giving</Link>
      </div>
      <div className="row">
        <div className="col-sm">
          <p>Fellowship Baptist Church<br />87 Frederick Street, <br />Blacktown NSW 2148 <br />&copy; Fellowship Baptist Church</p>
        </div>
        <div className="col-sm">
          <p className="footer-social-title">STAY CONNECTED</p>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/groups/584850305633207/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            {/* <a href="https://twitter.com/FellowshipBC"><i className="fab fa-twitter"></i></a> */}
          </div>
        </div>
        <div className="col-sm d-none d-sm-none d-md-none d-lg-block">
          <a href='/'>
            <img className="footer-logo float-right" src="img/fellowship_logo.png" srcSet="img/fellowship_logo.png 2x" alt="Fellowship Baptist Church logo" />
          </a>
        </div>
      </div>
    </div>
  )
};

export default Footer;
