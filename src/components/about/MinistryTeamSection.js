import React from 'react';

const imgStyleRight = {
  float: 'right',
  border: '3px solid #dcd4c5',
  height: '186px',
  width: '249px',
  marginLeft: 20,
  marginBottom: 10,
};

const MinistryTeamSection = (props) => {
  return (
    <div>
      <h2>Pastoral leadership team</h2>
      <h4>Dr. Michael and April Kwok</h4>
      <p><img src='/img/profile/MikeAndAprilKwok.jpg' alt='Mike and April Kwok' style={imgStyleRight}></img></p>
      <p>Pastor Mike grew up in Sydney before moving to America for his education in 1984. He studied for the ministry at Bob Jones University in Greenville, SC, and returned to Australia in 1998 to pastor at Fellowship Baptist Church. In 2003, he lost his first wife, Lynda, to cancer. He remarried in 2006 to April, and together they parent three sons and two daughters. Pastor Mike is an avid believer in expositional preaching and he loves church history, spending time with his wife, and tennis. He completed his ministry doctorate in 2019 on the topic of church planting.</p>
      <p>&nbsp;</p>
      <h4>Pastor Brian Eggert</h4>
      <p>&nbsp;</p>
      <h4>Pastor Paul Weber</h4>
      <p><img src='/img/profile/PaulAndRachelWeber.jpg' alt='Paul and Rachel Weber' style={imgStyleRight}></img></p>
      <p>Pastor Paul was born and raised in the USA in Detroit, Michigan. Following graduation, he joined the
US Marines. Afterward, he moved to Columbus, Indiana, and met Rachel. He studied for the
ministry at Tennessee Temple University in Chattanooga, Tennessee. They were married in 1992. In
2003, they moved to Australia, being involved in the start of five churches in the greater Sydney
area. In 2019, he accepted the role as an Elder at Fellowship. Paul and Rachel have three sons, born
in the USA and two daughters, born in Australia. Pastor Paul has a passion for preaching God’s
Word. He loves spending time with his family, sport, and playing board games.</p>
      <p>&nbsp;</p>
      <h2>Deacons</h2>
      <h2>Young adult/youth team</h2>
      <h4>IGNITE Young Adults</h4>
      <p>David and Daniela Vittor and Jesse and Nicole Zarate have each been part of Fellowship Baptist Church
        for over 10 years, and love ministering to the young people at the church. We hold fortnightly bible studies,
        with regular social events, to help young people experience the joy of knowing and growing in Christ.
      </p>
      <h4>EPIC Youth Team</h4>
      <p>Joshua and Kat Fernandez are leading a monthly time of activities for the 10-16 year olds at the church.</p>
      <h2>Admin team</h2>
    </div >
  )
}

export default MinistryTeamSection;
