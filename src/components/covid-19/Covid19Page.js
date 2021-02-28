import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './Covid19Page.css';

function Covid19Page(props) {
  return (
    <Page>
      <PageBanner imageUrl="/img/banner/table.jpg" />
      <div className="content">
        <p>
          <h3>Limited meetings in person</h3>
          <p>
            <img src='/img/COVID_Safe_Badge.png' alt='Covid Safe Badge' className="covid-img" align='left'></img>
            We are now meeting at our church building on Frederick St as a COVID safe venue.
            All are welcome, and there is no limit on attendees. In order to comply with regulation,
            all attenders are required to register each Sunday service they attend.
            Temporarily there is no congregational singing or passing an offering plate.
          </p>

          <p>There is only one Sunday service at 10am, with a children’s service running downstairs at the same time</p>

          <h3>Conditions of entry</h3>
          <ol>
            <li>All site visitors must check-in upon arrival, and provide their details for contact tracing.</li>
            <li>Sanitise hands as you enter the building (sanitiser provided) and frequently wash your hands with soap for at least 20 seconds.</li>
            <li>Practice physical distancing of 1.5m at all times.</li>
            <li>Do not enter the building iff you have travelled overseas or been in Victoria in the past month, or are experiencing a fever, cough, sore throat, or shortness of breath.</li>
            <li>Leave the premises immediately and inform a staff member if you develop symptoms or start feeling sick while at church.</li>
          </ol>
        </p>
      </div>
    </Page>
  )
}

export default Covid19Page;
