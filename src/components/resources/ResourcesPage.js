import React from 'react';
import moment from 'moment';

const DATE_FORMAT_AUD = 'DD MMM YYYY';
const DATE_FORMAT_ISO = 'YYYYMMDD';
const ResourcesSection = (props) => {
  const publishDay = moment().day('Thursday');
  return (
    <div className="page">
      <h2>Newsletters</h2>
      <ul>
        <li>
          <h4><a target="_blank" href={'/newsletters/' + publishDay.format(DATE_FORMAT_ISO) + '.pdf'}>{publishDay.format(DATE_FORMAT_AUD)} (Current)</a></h4>
        </li>
        <li>
          <h4><a target="_blank" href={'/newsletters/' + publishDay.clone().add(-7, 'day').format(DATE_FORMAT_ISO) + '.pdf'}>{publishDay.clone().add(-7, 'day').format(DATE_FORMAT_AUD)}</a></h4>
        </li>
        <li>
          <h4><a target="_blank" href={'/newsletters/' + publishDay.clone().add(-14, 'day').format(DATE_FORMAT_ISO) + '.pdf'}>{publishDay.clone().add(-14, 'day').format(DATE_FORMAT_AUD)}</a></h4>
        </li>
        <li>
          <h4><a target="_blank" href={'/newsletters/' + publishDay.clone().add(-21, 'day').format(DATE_FORMAT_ISO) + '.pdf'}>{publishDay.clone().add(-21, 'day').format(DATE_FORMAT_AUD)}</a></h4>
        </li>
      </ul>

      <h2>Links</h2>
      <table className="table">
        <thead>
          <tr><th>Link</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><a rel="noopener noreferrer" target="_blank" href="https://peacewithgod.net/">Peace with God</a></td><td>Find peace with God</td></tr>
        </tbody>
      </table>
      <br />
    </div>
  )
}

export default ResourcesSection;
