import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './EventsPage.css';

function WhatsOnSection(props) {
  return (
    <Page>
      <PageBanner imageUrl="/img/banner/table-bible2.jpg" />
      <div className="content">
        <h2 className="title">Calendar</h2>
        <div className="calendar">
          <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23e2e2e2&amp;ctz=Australia%2FSydney&amp;src=b25oczllajB2MWh1aGtwcmdlamhqY2U0bTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23e2e2e2&amp;showTitle=1&amp;title=FBC%20Events&amp;showDate=1&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;showPrint=0" width="100%" height="600" frameborder="0" scrolling="no" title="calendar"></iframe>
        </div>

        <h2 className="title">Sunday Meetings</h2>
        <p className="highlightText">Morning service at 10.00am</p>

        <h2 className="title">Church Ministries</h2>
        <p>For more information about church ministries see our:
          <a class="btn btn-lg" href="/about/church">Church Ministries page</a>
        </p>
      </div>
    </Page >
  )
}

export default WhatsOnSection;
