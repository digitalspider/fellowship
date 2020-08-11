import React from 'react';
import moment from 'moment';

const DATE_FORMAT_ISO = 'YYYYMMDD';
const DATE_FORMAT_AUD = 'DD MMM YYYY';
const GITHUB_NEWSLETTERS_URL = 'https://api.github.com/repos/digitalspider/fellowship/contents/public/newsletters';

// String -> [String]
async function getNewsletters() {
  const response = await fetch(GITHUB_NEWSLETTERS_URL);
  const data = await response.json();
  return data.map((file) => file.name).filter((filename) => filename.slice(-4) === '.pdf').reverse();
}


class ResourcesSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsletters: [],
    };
  }

  async componentDidMount(_prevProps) {
    const newsletters = await getNewsletters();
    this.setState({ newsletters });

  }

  render() {
    return (
      <div className="page">
        <h2>Newsletters</h2>
        <ul>
          {this.state.newsletters.map((value, index) => {
            return <li key={index}>
              <h4><a target="_blank" rel="noopener noreferrer" href={'/newsletters/' + value}>{moment(value, DATE_FORMAT_ISO).format(DATE_FORMAT_AUD) + (index === 0 ? ' (Current)' : '')}</a></h4>
            </li>
          })}
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
}

export default ResourcesSection;
