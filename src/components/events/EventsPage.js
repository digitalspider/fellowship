import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './EventsPage.css';

const WhatsOnSection = (props) => {
  return (
    <Page>
      <PageBanner imageUrl="/img/banner/table-bible2.jpg" />
      <div className="content">
        <h2 className="title">Sunday Meetings</h2>
        <p className="highlightText">Morning service at 10.00am</p>

        <h2 className="title">Calendar</h2>
        <div className="calendar">
          <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23b49c7f&amp;ctz=Australia%2FSydney&amp;src=b25oczllajB2MWh1aGtwcmdlamhqY2U0bTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%b49c7f&amp;showTitle=1&amp;title=FBC%20Events&amp;showDate=1&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;showPrint=0" width="100%" height="600" frameborder="0" scrolling="no" title="calendar"></iframe>
        </div>

        <h2 className="title">Regular Ministries</h2>
        <table className="table">
          <tbody>
            <tr><th>Event</th><th>What</th><th>When</th></tr>
            <tr><td>Care Groups</td><td>Bible studies for families</td><td>Friday Fortnightly, 7:30PM</td></tr>
            <tr><td>IGNITE</td><td>Young adults bible study and social events</td><td>Friday Fortnightly, 7:30PM</td></tr>
            <tr><td>EPIC Youth</td><td>Teens bible lessons and social events</td><td>Last Friday of the Month, 7PM</td></tr>
            <tr><td>Men’s Coffee Club</td><td>Coffee meet up for the men of the church</td><td>Last Saturday of the Month, 8:30AM</td></tr>
          </tbody>
        </table>
        <h2 className="title">Annual Ministries</h2>
        <table className="table">
          <tbody>
            <tr><th>Event</th><th>What</th><th>When</th></tr>
            <tr><td>Christmas</td><td>A celebration of the birth of Jesus Christ</td><td>Late December</td></tr>
            <tr><td>Easter Friday and Sunday</td><td>A rememberence of the death and resurrection of Jesus Christ</td><td>Usually in April</td></tr>
            <tr><td>Holiday Bible Club</td><td>A week long school-holiday event for children aged 12 and younger</td><td>September/October school holidays</td></tr>
            <tr><td>AFBC Conferences</td><td>A 3-day annual conference</td><td>June/July</td></tr>
          </tbody>
        </table>
      </div>
    </Page >
  )
}

export default WhatsOnSection;
