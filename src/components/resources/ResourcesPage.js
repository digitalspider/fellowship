import React from 'react';
import moment from 'moment';

const DATE_FORMAT_AUD = 'DD MMM YYYY';
const ResourcesSection = (props) => {
  const lastSunday = moment().startOf('week');
  return (
    <div className="page">
      <h2>Newsletters</h2>
      <ul>
        <li>
          <h4><a target="_blank" href="/newsletters/Thursday16thApril2020.pdf">{lastSunday.format(DATE_FORMAT_AUD)} (Current)</a></h4>

        </li>
        <li>
          <h4><a target="_blank" href="/newsletters/Thursday16thApril2020.pdf">{lastSunday.add(-7, 'day').format(DATE_FORMAT_AUD)}</a></h4>
        </li>
        <li>
          <h4><a target="_blank" href="/newsletters/Thursday16thApril2020.pdf">{lastSunday.add(-14, 'day').format(DATE_FORMAT_AUD)}</a></h4>
        </li>
      </ul>

      <h2>Links</h2>
      <table className="table">
        <thead>
          <tr><th>Link</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><a target="_blank" href="https://peacewithgod.net/">Peace with God</a></td><td>Find peace with God</td></tr>
        </tbody>
      </table>
      <br />
    </div>
  )
}

export default ResourcesSection;
