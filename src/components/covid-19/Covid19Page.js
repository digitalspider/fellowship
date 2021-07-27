import React from 'react';
import Page from '../page/Page';
// import PageBanner from '../page/PageBanner';
import './Covid19Page.css';

function Covid19Page(props) {
  return (
    <Page>
      {/* <PageBanner imageUrl="/img/banner/table.jpg" /> */}
      <div className="content">
        <p>&nbsp;</p>
        <img src='/img/COVID_Safe_Badge.png' alt='Covid Safe Badge' className="covid-img" align='left'></img>
        <p>
          Our church building on Frederick St is a COVID safe venue.
        </p>
        <p>
          For the latest COVID-19 information see <a href="https://www.nsw.gov.au/covid-19" target="_blank" rel="noopener noreferrer">Service NSW</a>, and our <a href="https://www.facebook.com/FBCBlacktown" target="_blank" rel="noopener noreferrer">Facebook page</a>
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </Page>
  )
}

export default Covid19Page;
