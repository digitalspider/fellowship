import React from 'react';
import moment from 'moment';
import './ResourcesPage.css';

const DATE_FORMAT_ISO = 'YYYY-MM-DD';
const DATE_FORMAT_AUD = 'DD MMM YYYY';
const GITHUB_NEWSLETTERS_URL = 'https://api.github.com/repos/digitalspider/fellowship/contents/public/newsletters';

// String -> [String]
async function getNewsletters() {
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
  };
  const response = await fetch(GITHUB_NEWSLETTERS_URL, options);
  const data = await response.json();
  return data.map((file) => file.name).filter((filename) => filename.slice(-4) === '.pdf').reverse().slice(0, 10);
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
        <div className="container">

          <div className="item" key="Left">
            <h2>Newsletters</h2>
            <div className="container-vertical">
              {this.state.newsletters.map((value, index) => {
                return <div className="item" key={index}>
                  <h4><a target="_blank" rel="noopener noreferrer" href={'/newsletters/' + value}>{moment(value, DATE_FORMAT_ISO).format(DATE_FORMAT_AUD) + (index === 0 ? ' (Current)' : '')}</a></h4>
                </div>
              })}
            </div>
          </div>

          <div className="item" key="Right">
            <h2>Links</h2>
            <table className="table">
              <thead>
                <tr><th>Link</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td><a rel="noopener noreferrer" target="_blank" href="https://peacewithgod.net/">Peace with God (Link)</a></td><td>Find peace with God</td></tr>
                <tr><td><a rel="noopener noreferrer" target="_blank" href="/media/Gospel-Steps-to-Peace-with-God.pdf">Peace with God (PDF)</a></td><td>Find peace with God</td></tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    )
  }
}

export default ResourcesSection;
