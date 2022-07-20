import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './EventsPage.css';

function WhatsOnSection(props) {
  return (
    <Page>
      <PageBanner imageUrl="/img/banner/table-bible2.jpg" />
      <div className="content">
          
        <h2 className="title">What's on</h2>
        <p>Our main service occurs every Sunday at 10.00am</p>
        <p>We host a number of ministries. For more information see:
          <a class="btn btn-lg" href="/about/church">Church Ministries</a>
        </p>
        <div className="calendar">
          <iframe src="https://calendar.google.com/calendar/embed?src=l4bqslhrtjsf522dvmcirodf5c%40group.calendar.google.com&amp;ctz=Australia%2FSydney&amp;height=600&amp;wkst=1&amp;bgcolor=%23e2e2e2&amp;color=%23e2e2e2&amp;showTitle=1&amp;title=FBC%20Events&amp;showDate=1&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;showPrint=0" width="100%" height="600" frameborder="0" scrolling="no" title="calendar"></iframe>
        </div>

      </div>
    </Page >
  )
}

export default WhatsOnSection;
