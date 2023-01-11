import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import PageSection from '../page/PageSection';
import Welcome from './Welcome';
import History from './History';
import Gospel from './Gospel';
import LeadershipTeam from './LeadershipTeam';
import ChurchMinistry from './ChurchMinistry';
import Missionary from './Missionary';
import WhatWeBelieve from './WhatWeBelieve';
import WhatWeBelieveMore from './WhatWeBelieveMore';
import WhatToExpect from './WhatToExpect';
import './AboutPage.css';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSectionChange = (bannerImage, title, bannerMobilePosition) => {
    this.setState({
      currentBannerImage: bannerImage,
      title: title,
      bannerMobilePosition: bannerMobilePosition,
    });
  };

  render() {
    return (
      <Page>
        {/* <PageBanner title='' imageUrl={this.state.currentBannerImage} bannerMobilePosition={this.state.bannerMobilePosition} titleColour="black" /> */}
        <PageSidebar onSectionChange={this.handleSectionChange} currentSection={this.state.currentSection}>
          {/* <PageSection
            linkTitle="Welcome"
            bannerImageUrl="/img/about_us.jpg"
            url="/about"
            bannerMobilePosition="right">
            <Welcome />
          </PageSection> */}

          <PageSection linkTitle="What to Expect" bannerImageUrl="/img/about_us.jpg" url="/about/expect" bannerMobilePosition="right">
            <WhatToExpect />
          </PageSection>

          <PageSection linkTitle="Peace with God" bannerImageUrl="/img/about_us.jpg" url="/about/gospel" bannerMobilePosition="right">
            <Gospel />
          </PageSection>

          <PageSection linkTitle="Leadership Team" bannerImageUrl="/img/about_us.jpg" url="/about/leadership" bannerMobilePosition="right">
            <LeadershipTeam />
          </PageSection>

          <PageSection linkTitle="Church Ministries" bannerImageUrl="/img/about_us.jpg" url="/about/church" bannerMobilePosition="right">
            <ChurchMinistry />
          </PageSection>

          <PageSection linkTitle="Missionaries" bannerImageUrl="/img/about_us.jpg" url="/about/missionary" bannerMobilePosition="right">
            <Missionary />
          </PageSection>

          <PageSection linkTitle="History" bannerImageUrl="/img/history.jpg" url="/about/history" bannerMobilePosition="right">
            <History />
          </PageSection>

          <PageSection linkTitle="What We Believe" bannerImageUrl="/img/what_we_believe.png" url="/about/what-we-believe" bannerMobilePosition="center">
            <WhatWeBelieve />
            <WhatWeBelieveMore />
          </PageSection>
        </PageSidebar>
      </Page>
    );
  }
}

export default AboutPage;
