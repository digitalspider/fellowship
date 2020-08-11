import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import PageSection from '../page/PageSection';
import WelcomeSection from './WelcomeSection';
import HistorySection from './HistorySection';
import GospelSection from './GospelSection';
import MinistryTeamSection from './MinistryTeamSection';
import MissionarySection from './MissionarySection';
import HistorySectionMore from './HistorySectionMore';
import WhatWeBelieveSection from './WhatWeBelieveSection';
import WhatWeBelieveSectionMore from './WhatWeBelieveSectionMore';
import WhatToExpectSection from './WhatToExpectSection';
import './AboutPage.css'

class AboutPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSectionChange = (bannerImage, title, bannerMobilePosition) => {
    this.setState({
      currentBannerImage: bannerImage,
      title: title,
      bannerMobilePosition: bannerMobilePosition
    })
  }

  render() {
    return (
      <Page>
        <PageBanner title={this.state.title} imageUrl={this.state.currentBannerImage} bannerMobilePosition={this.state.bannerMobilePosition} titleColour="white" />
        <PageSidebar onSectionChange={this.handleSectionChange} currentSection={this.state.currentSection}>

          <PageSection
            linkTitle="Welcome"
            bannerImageUrl="/img/about_us.jpg"
            url="/about"
            bannerMobilePosition="right">
            <WelcomeSection />
          </PageSection>

          <PageSection
            linkTitle="What to Expect"
            bannerImageUrl="/img/about_us.jpg"
            url="/about/expect"
            bannerMobilePosition="right">
            <WhatToExpectSection />
          </PageSection>

          <PageSection
            linkTitle="Good news"
            bannerImageUrl="/img/about_us.jpg"
            url="/about/gospel"
            bannerMobilePosition="right">
            <GospelSection />
          </PageSection>

          <PageSection
            linkTitle="Ministry Team"
            bannerImageUrl="/img/about_us.jpg"
            url="/about/ministry"
            bannerMobilePosition="right">
            <MinistryTeamSection />
          </PageSection>

          <PageSection
            linkTitle="Missionaries"
            bannerImageUrl="/img/about_us.jpg"
            url="/about/missionary"
            bannerMobilePosition="right">
            <MissionarySection />
          </PageSection>

          <PageSection
            linkTitle="History"
            bannerTitle="HOW IT ALL BEGAN"
            bannerImageUrl="/img/history.jpg"
            url="/about/history"
            bannerMobilePosition="right">
            <HistorySection />
            <HistorySectionMore />
          </PageSection>

          <PageSection
            linkTitle="What We Believe"
            bannerImageUrl="/img/what_we_believe.png"
            url="/about/what-we-believe"
            bannerMobilePosition="center">
            <WhatWeBelieveSection />
            <WhatWeBelieveSectionMore />
          </PageSection>

        </PageSidebar>
      </Page>
    )
  }

}

export default AboutPage;
