import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './SermonsPage.css';

function SermonsPage(props) {
  var style = {
    minHeight: '700px',
    minWidth: '100%',
    maxWidth: '100%',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  };

  return (
    <Page>
      <PageBanner imageUrl="/img/banner/sermon-banner.jpg" />
      <div className="sermon-page content">
        <div>
          <iframe style={style} height="700" title="Sermons" src="https://embed.sermonaudio.com/browser/broadcaster/fellowship/?sort=newest&page_size=25"></iframe>
        </div>
      </div>
    </Page>
  );
}

export default SermonsPage;
