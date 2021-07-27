import React from 'react';
import Page from '../page/Page';
import Map from '../map/Map';
import './ContactPage.css';

function ContactPage(props) {
  return (
    <Page>
      <div className="content">
        <h2 className="title">Location</h2>
        <Map fullWidth={true} />
        <div className="contact-page">
          <br />
          <p>
            Fellowship Baptist Church<br />
            87 Frederick Street<br />
            Blacktown NSW 2148<br />
          </p>
          <br />
          <i className="fas fa-phone"></i> 02 9672 1691
          <br />
          <a href="//www.facebook.com/FBCBlacktown"><i className="fab fa-facebook-f"></i> Facebook</a>
          <br />
          <a href="mailto:info@fellowship.org.au"><i className="far fa-envelope"></i> Email Us</a>
        </div>
      </div>
    </Page>
  )
}

export default ContactPage;
