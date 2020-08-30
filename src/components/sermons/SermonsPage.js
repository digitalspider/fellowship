import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './SermonsPage.css';


const SermonsPage = (props) => {

  var style = {
    minHeight: "700px",
    minWidth: "100%",
    maxWidth: "100%",
    border: "1px solid #ddd",
    boxSizing: "border-box"
  }

  return (
    <Page>
      <PageBanner imageUrl="/img/banner/table-podcast.jpg" />
      <div className="sermon-page content">
        <h1 className="title">Sermons</h1>
        <hr />
        <div>
          <iframe style={style} height="700" title="Sermons" src="https://embed.sermonaudio.com/browser/broadcaster/fellowship/?sort=newest&page_size=25"></iframe>
        </div>
      </div>
    </Page>
  )
}

export default SermonsPage;
