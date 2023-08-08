import React from 'react';
import Page from '../page/Page';
import Map from '../map/Map';
import './ContactPage.css';

function ContactPage(props) {
  return (
    <Page>
      <div className="content">
        <div className="contact-page">
          <br />
          <p>
            Fellowship Baptist Church<br />
            87 Frederick Street<br />
            Blacktown NSW 2148<br />
          </p>
          <br />
          <i className="fas fa-phone"></i> 0403 305 384
          <br />
          <a href="//www.facebook.com/FBCBlacktown"><i className="fab fa-facebook-f"></i> Facebook</a>
          <br />
          <a href="mailto:info@fellowship.org.au"><i className="far fa-envelope"></i> Email Us</a>
        </div>
        <h2 className="title">Directions to FBC</h2>
        <Map fullWidth={true} />
      </div>
    </Page>
  )
}

export default ContactPage;
