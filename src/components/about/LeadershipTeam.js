import React from 'react';

const imgStyleRight = {
  borderRadius: '50%',
  float: 'right',
  border: '3px solid #dcd4c5',
  height: '215px',
  width: '249px',
  marginLeft: 20,
  marginBottom: 10,
};

function LeadershipTeam(props) {
  return (
    <div>
      <h2>Pastoral leadership team</h2>
      <h4>Dr. Michael and April Kwok</h4>
      <p><img src='/img/profile/MikeAndAprilKwok.jpg' alt='Mike and April Kwok' style={imgStyleRight}></img></p>
      <p>Pastor Mike grew up in Sydney before moving to America for his education in 1984.
      He studied for the ministry at Bob Jones University in Greenville, SC, and returned to Australia in 1998 to pastor at
      Fellowship Baptist Church. In 2003, he lost his first wife, Lynda, to cancer. He remarried in 2006 to April, and together
      they parent three sons and two daughters. Pastor Mike is an avid believer in expositional preaching and he loves church history,
        spending time with his wife, and tennis. He completed his ministry doctorate in 2019 on the topic of church planting.</p>
      <p>&nbsp;</p>
      <h4>Pastor Brian and Angie Eggert</h4>
      <p>Pastor Brian grew up in central Florida. In 1988-93, he attended Moody Bible Institute in Chicago, where he earned a BMus and met his wife, Angela. From Chicago, the Lord led Brian into church ministry as an associate pastor & music minister in Illinois, and later in Michigan. While in Michigan, he attended Moody Theological Seminary, earning a MDiv in 2008. In the meantime, God blessed Brian and Angela with three children – Maeghan, Gilbert and Emily. In August 2009, the family moved to Sydney, where among other things, they have enjoyed being part of the ministry at Fellowship since January 2010. Brian loves to teach Bible, music, history and English, and especially enjoys gardening, woodworking and time with his family.</p>
      <p>&nbsp;</p>
      <h4>Pastor Paul and Rachel Weber</h4>
      <p><img src='/img/profile/PaulAndRachelWeber.jpg' alt='Paul and Rachel Weber' style={imgStyleRight}></img></p>
      <p>Pastor Paul was born and raised in the USA in Detroit, Michigan. Following graduation, he joined the
      US Marines. Afterward, he moved to Columbus, Indiana, and met Rachel. He studied for the
      ministry at Tennessee Temple University in Chattanooga, Tennessee. They were married in 1992. In
      2003, they moved to Australia, being involved in the start of five churches in the greater Sydney
      area. In 2019, he accepted the role as an Elder at Fellowship. Paul and Rachel have three sons, born
      in the USA and two daughters, born in Australia. Pastor Paul has a passion for preaching God’s
        Word. He loves spending time with his family, sport, and playing board games.</p>
      <p>&nbsp;</p>
      <h4>Deacons</h4>
      <ul>
        <li>Nelson and Tonton Yunzal</li>
        <li>Stuart and Karen Higgins</li>
        <li>Glen and Debbie Truman</li>
        <li>Justin and Cornelia Portelli</li>
        <li>Noel and Pines Hearsey</li>
      </ul>
    </div >
  )
}

export default LeadershipTeam;
