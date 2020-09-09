import React from 'react';
import Page from '../page/Page';
import Map from '../map/Map';
import './ContactPage.css';

const ContactPage = (props) => {
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
            <br/>
            Phone: 02 9672 1691<br />
          </p>
          <br />
          <a href="mailto:pastor@fellowship.org.au"><i className="far fa-envelope"></i> Email Us</a>
        </div>
      </div>
    </Page>
  )
}

export default ContactPage;
