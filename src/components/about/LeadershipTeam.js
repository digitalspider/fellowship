import React from 'react';

const imgStyleRight = {
  float: 'right',
  border: '3px solid #dcd4c5',
  height: '186px',
  width: '249px',
  marginLeft: 20,
  marginBottom: 10,
};

const LeadershipTeam = (props) => {
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
    </div >
  )
}

export default LeadershipTeam;
