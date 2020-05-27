import React from 'react';
import BibleVerse from '../utils/BibleVerse';

const imgStyleLeft = {
  float: 'left',
  align: 'left',
  border: '3px solid #dcd4c5',
  marginRight: 20,
  marginTop: 0,
  marginBottom: 10,
};

const imgStyleRight = {
  float: 'right',
  align: 'right',
  border: '3px solid #dcd4c5',
  marginLeft: 20,
  marginTop: 0,
  marginBottom: 10,
};

const WelcomeSection = (props) => {
  return (
    <div>
      <h2>WELCOME</h2>
      <p>
        Fellowship Baptist Church is an Australian independent Baptist church. It's part of the Australian Fellowship of Bible-believing Churches.
        <br />
        <div className="blockquote">To glorify God as a loving fellowship<br />of Christlike disciplemakers.</div>
      </p>
      <p>
        <div>
          <img width="200" height="132" alt="_MG_4519" src="/img/about/_MG_4519.JPG" style={imgStyleRight}></img>
          <h2>To glorify God</h2>
          <p>Our mandate to worship God and keep Him in the centre of our church</p>
          <p>&nbsp;</p>
          <img alt="IMG_4444" src="/img/about/IMG_4444_2.JPG" style={imgStyleLeft}></img>
          <h2>as a loving</h2>
          <p>Our call to love and care for one another and the community</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <img width="200" height="163" alt="IMG_4478" src="/img/about/IMG_4478.JPG" style={imgStyleRight}></img>
          <h2>fellowship</h2>
          <p>Magnifying our unity and identity as brothers and sisters in Christ</p>
          <p>&nbsp;</p>
          <img width="133" height="200" alt="_MG_4524" src="/img/about/_MG_4524.jpg" style={imgStyleLeft}></img>
          <h2>of Christlike</h2>
          <p>Maturity in Christ is our goal as a corporate body and individual believers</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <img alt="IMG_4443" src="/img/about/IMG_4443_2.JPG" style={imgStyleRight}></img>
          <h2>disciplemakers&nbsp;</h2>
          <p>Our commission to evangelize and nurture new believers</p>
        </div>
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>
        &quot;And He is the head of the body, the church: who is the beginning, the firstborn from the dead; that in all
        things He might have the pre-eminence.&quot; <BibleVerse reference="COL.1.18" text="Colossians. 1:18" />
      </p>
      <p>
        We desire to see Christian’s grow; whilst for non-Christians, we desire for them to come to personal saving knowlege
        of the Lord Jesus Christ. Thus main focus in our meetings is the preaching of God’s Word.
      </p>
      <p>
        &quot;Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and
        doctrine.&quot; <BibleVerse reference="2TI.4.2" text="2 Timothy 4:2" />
      </p>
      <p>
        Crèche facilities and Children’s church operate during our Sunday morning meeting.
        If you are visiting in the area or seeking a place to worship we heartily invite you to come along and enjoy the
        fellowship of God’s people. We assure you of a warm welcome at all times.
      </p>
    </div>
  )
}

export default WelcomeSection;
