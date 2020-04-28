import React from 'react';

const WhatsOnSection = (props) => {
  return (
    <div className="page">
      <div className="alert alert-warning">
        <p>Many of our scheduled church gatherings are currently on Zoom.</p>
        <a href="/covid19">Read more</a>
      </div>
      <h2>Midweek Meetings</h2>
      <table className="table">
        <tbody>
        <tr><td>Women's Meeting</td><td>Last Tuesday of each month at 8pm</td></tr>
        <tr><td>Bible study and care groups</td><td>Friday fortnightly 7:30pm</td></tr>
        <tr><td>IGNITE Young adults</td><td>Friday fortnightly 7:30pm</td></tr>
        <tr><td>EPIC Youth</td><td>First Thursday of each month at 10:45am</td></tr>
        <tr><td>Mums and Tots</td><td>Mondays at 10am (During term time)</td></tr>
        </tbody>
      </table>
      <br/>

      <h2>Sunday Meetings</h2>
      <table className="table">
        <tbody>
        <tr><td>Morning service</td><td>10.00am</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default WhatsOnSection;
