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
        {/* <PageBanner imageUrl="/img/banner/giving.jpg" titleColour="white" /> */}
        <div className="content">
          <p>Our God is a gracious and giving God. We at Fellowship Baptist Church believe that as Christians we seek to be generous in support of our local church. We give with a grateful and cheerful heart for what God has done for us and for the advancement of the Gospel.</p>
          <br />
          <p>If you would like to give via Bank Transfer, please contact us for the details.</p>
          {/* <a href="media/online-giving.pdf">Online Giving (PDF)</a> */}
          <br/>
          <p>
            <strong>So let each one give as he purposes in his heart, not grudgingly or of necessity: for God loves a cheerful giver.</strong>
            <BibleVerse reference="2CO.9.7" text="2 Corinthians 9:7" />
          </p>
        </div>
      </Page>
    )
  }

}

export default GivingPage;
