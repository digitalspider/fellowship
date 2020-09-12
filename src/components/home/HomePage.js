import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import HomePageIntro from './HomePageIntro';
import HomePageLinks from './HomePageLinks';
// import HomePageSlider from './HomePageSlider';
import './HomePage.css';

function HomePage(props) {
  return (
    <Page>
      <PageBanner imageUrl="/img/banner/auditorium.jpg" />
      <HomePageIntro />
      <HomePageLinks />
      <br />
    </Page>
    // <div className="home-page">
    //   <HomePageSlider />
    //   <HomePageIntro />
    //   <HomePageLinks />
    //   <br />
    // </div>
  )
}

export default HomePage;
