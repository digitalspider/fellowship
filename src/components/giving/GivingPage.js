import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import BibleVerse from '../utils/BibleVerse';
import './GivingPage.css';

class GivingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Page>
        <PageBanner imageUrl="/img/banner/giving.jpg" titleColour="white" title="GIVING" />
        <div className="ml-3 mr-3 pt-4 pb-4">
          <p>
            <strong>Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.</strong>
            <br />
            <BibleVerse reference="2CO.9.7" text="2 Corinthians 9:7" />
          </p>
          <p>A number of people have been asking about how they can continue to support the Lord’s work financially while the normal weekly meetings are suspended.</p>
          <p>Please contact our church treasurer, Justin Portelli, at <a href="mailto:treasurer@fellowship.org.au?subject=Enquiry%20about%20giving&body=Dear%Pastor,%0A%0AI%20would%20like%20to%20enquire%20about%20the%20process%20for%20supporting%20the%20Lord’s%20work%20financially.%0A%0AThank%20You">treasurer@fellowship.org.au</a> and details of how you can do this will be sent to you by email.</p>
          <br />
          <a href="media/online-giving.pdf">Online Giving (PDF)</a>
        </div>
      </Page>
    )
  }

}

export default GivingPage;
