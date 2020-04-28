import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
  return (
      <div className="footer">
        <div className="footer-links">
          <Link to="/about">About</Link><span className="footer-link-slash">/</span>
          <a href="/bulletin/bulletin.pdf" target="_blank">Bulletin</a><span className="footer-link-slash">/</span>
          <Link to="/sermons">Sermons</Link><span className="footer-link-slash">/</span>
          <Link to="/contact">Contact</Link><span className="footer-link-slash">/</span>
          {/* <Link to="/live">Watch Live</Link> */}
        </div>
        <div className="row">
          <div className="col-sm">
            <p>Fellowship Baptist Church<br/>87 Frederick Street, <br/>Blacktown NSW 2148 <br/>&copy; Fellowship Baptist Church</p>
          </div>
          <div className="col-sm">
            <p className="footer-social-title">STAY CONNECTED</p>
            <div className="footer-social-links">
              <a href="https://www.facebook.com/groups/584850305633207/" target="_blank"><i className="fab fa-facebook-f"></i></a>
              {/* <a href="https://twitter.com/FellowshipBC"><i className="fab fa-twitter"></i></a> */}
            </div>
          </div>
          <div className="col-sm d-none d-sm-none d-md-none d-lg-block">
            <img alt="footer-logo" srcSet="img/logo_footer@2x.png 2x" className="footer-logo float-right" src="img/logo_footer.png"/>
          </div>
        </div>
      </div>
    )
};

export default Footer;
