import React from 'react';
import Page from '../page/Page';
import Map from '../map/Map';
import './ContactPage.css';

const ContactPage = (props) => {
  return (
    <Page>
      <Map fullWidth={true} />
      <div className="contact-page">
        <br />
        <p>
          Fellowship Baptist Church<br />
          87 Frederich Road<br />
          Blacktown NSW 2148<br />
        </p>
        <br />
        <a href="mailto:pastor@fellowship.org.au"><i className="far fa-envelope"></i> Email Us</a>
      </div>
    </Page>
  )
}

export default ContactPage;
