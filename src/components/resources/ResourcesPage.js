import React from 'react';
// import moment from 'moment';
import './ResourcesPage.css';

// const DATE_FORMAT_ISO = 'YYYY-MM-DD';
// const DATE_FORMAT_AUD = 'DD MMM YYYY';
// const GITHUB_NEWSLETTERS_URL = 'https://api.github.com/repos/digitalspider/fellowship/contents/public/newsletters';

// // String -> [String]
// async function getNewsletters() {
//   const options = {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/vnd.github.v3+json',
//     },
//   };
//   const response = await fetch(GITHUB_NEWSLETTERS_URL, options);
//   const data = await response.json();
//   return data.map((file) => file.name).filter((filename) => filename.slice(-4) === '.pdf').reverse().slice(0, 10);
// }

class ResourcesSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsletters: [],
    };
  }

  // async componentDidMount(_prevProps) {
  //   const newsletters = await getNewsletters();
  //   this.setState({ newsletters });
  // }

  render() {
    return (
      <div className="page">
        <div className="container">

          {/* <div className="item" key="Left">
            <h2>Newsletters</h2>
            <div className="container-vertical">
              {this.state.newsletters.map((value, index) => {
                return <div className="item" key={index}>
                  <h4><a target="_blank" rel="noopener noreferrer" href={'/newsletters/' + value}>{moment(value, DATE_FORMAT_ISO).format(DATE_FORMAT_AUD) + (index === 0 ? ' (Current)' : '')}</a></h4>
                </div>
              })}
            </div>
          </div> */}

          {/* <div className="item" key="Right">
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
          </div> */}

          {/* <div className="item" key="Left">
            <h2>Books</h2>
            <p>*This listing is provided as a service. FBC is not responsible for all the content of these books.</p>

            <h4>Christ Among Other gods</h4>
            <p>by Erwin Lutzer</p>
            <p>The next time someone claims all religions teach the same basic truths, how will you respond? Here's the factual support you need to defend the uniqueness of Christ and counter the claims of Buddah, Krishna, Zoroaster, and others. Easy to read, but rich in content.</p>

            <h4>The Compact Guide to World Religions</h4>
            <p>edited by Dean C. Halverson</p>
            <p>In today's diverse society, most Christians come face-to-face with believers in Islam, Buddhism, Hinduism, Taoism, Judaism, Secularism, or New Age. Now, more than ever, it's important to understand these belief systems! This easy-to-use handbook will give you the great insights.</p>

            <h4>Not By Chance: Learning to Trust a Sovereign God</h4>
            <p>by Layton Talbert</p>
            <p>Dr. Layton Talbert takes you on a journey through the Scriptures to trace the unmistakable outline of God's shadow on human events.</p>

            <h4>The Roots of Endurance: Invincible Perseverance in the Loves of John Newton, Charles Simeon, and William Wilberforce</h4>
            <p>by John Piper</p>
            <p>Based on a series of messages by Piper, "Roots of Endurance" presents a picture of three godly men who endured against the odds.</p>

            <h4>The Practice of Godliness</h4>
            <p>by Jerry Bridges</p>
            <p>What makes a Christian godly? Bridges examines what it means to grow in Christian character and helps us establish the foundation upon which that character is built.</p>

            <h4>Can Man Live Without God?</h4>
            <p>by Ravi Zacharias</p>

            <p>Ravi Zacharias shows how affirming the reality of God’s existence matters urgently in our everyday lives, and how your answers to the questions of God’s existence will impact your relationship with others, your commitment to integrity, your attitude toward morality, and your perception of truth.</p>
          </div> */}

          <div className="item" key="Right">
            <h2>Ministries</h2>
            <h4>Ministries We Support:</h4>
            <ul>
              <li>Australian Fellowship of Bible-believing Churches (AFBC) - <a href='//www.facebook.com/AFBBC'>www.facebook.com/AFBBC</a></li>
              <li>Sydney Institute for Biblical Studies - <a href='//www.sibs.net.au'>www.sibs.net.au</a></li>
              <li>Australian Christian College - <a href='//www.acc.edu.au'>www.acc.edu.au</a></li>
            </ul>
            <h4>Friends in the AFBC:</h4>
            <ul>
              <li>Emmanuel Baptist Church, Glenwood - <a href='//www.emmanuel.org.au'>www.emmanuel.org.au</a></li>
              <li>Rouse Hill Church, Rouse Hill - <a href='//www.rousehillchurch.com'>www.rousehillchurch.com</a></li>
            </ul>
            <h4>Billy Graham Evangelical Association (BGEA)</h4>
            <ul>
              <li>Peace With God - <a href='//peacewithgod.net'>peacewithgod.net</a></li>
            </ul>
            <h2>Web Resources</h2>
            <p>*This listing is provided as a service. FBC is not responsible for the contents of these websites.</p>

            <h4>Evangelism &amp; Discipleship:</h4>
            <ul>
              <li>Answers in Genesis (creation science) - <a href='//www.answersingenesis.org'>www.answersingenesis.org</a></li>
              <li>Centre for Apologetic Scholarship &amp; Education - <a href='//www.case.edu.au'>www.case.edu.au</a></li>
              <li>Good Soil Evangelism &amp; Discipleship - <a href='//www.goodsoil.com'>www.goodsoil.com</a></li>
              <li>Sow &amp; Harvest International (evangelism/discipleship material in many languages) - <a href='//www.sowandharvest.com'>www.sowandharvest.com</a></li>
              <li>Ravi Zacharias Intl Ministries (apologetics) - <a href='//www.rzim.org'>www.rzim.org</a></li>
            </ul>
            <h4>Bible Study Resources:</h4>
            <ul>
              <li>Walk Thru the Bible - <a href='//www.walkthru.org'>www.walkthru.org</a></li>
              <li>StudyLight (free online Bible study resources) - <a href='//www.studylight.org'>www.studylight.org</a></li>
              <li>Christian Answers Network (evangelism/apologetics) - <a href='//www.christiananswers.net'>www.christiananswers.net</a></li>
              <li>BibleStudyTools.com (free online resources) - <a href='//www.biblestudytools.com'>www.biblestudytools.com</a></li>
              <li>Blue Letter Bible (many searchable Bible translations &amp; reliable study tools) - <a href='//www.blueletterbible.org'>www.blueletterbible.org</a></li>
              <li>E-Sword (free downloadable Bible study software) - <a href='//www.e-sword.net'>www.e-sword.net</a></li>
            </ul>

            <h4>Other Christian Resources:</h4>
            <ul>
              <li>Christian Today Australia (evangelical news source) - <a href='//au.christiantoday.com'>au.christiantoday.com</a></li>
              <li>Desiring God (God-centered resources from John Piper's ministry) - <a href='//www.desiringgod.org'>www.desiringgod.org</a></li>
              <li>Matthias Media (Bible-based ministry resources) - <a href='//www.matthiasmedia.com.au'>www.matthiasmedia.com.au</a></li>
              <li>Reformers' Bookshop (quality Christian literature) - <a href='//reformers.org.au'>reformers.org.au</a></li>
              <li>Spiritual Gifts Analysis - <a href='//www.churchgrowth.org/analysis/intro.php'>www.churchgrowth.org/analysis/intro.php</a></li>
              <li>World’s largest library of free mp3 sermons - <a href='//www.sermonaudio.com/fellowship'>www.sermonaudio.com/fellowship</a></li>
              <li>9Marks Ministries(an educational forum to discuss, examine &amp; debate the elements of a healthy local church) - <a href='//www.9marks.org'>www.9marks.org</a></li>
              <li>The following 3 are resources from the Billy Graham Evangelical Association(BGEA):</li>
              <li>1. Peace With God - <a href='https://peacewithgod.net'>https://peacewithgod.net</a></li>
              <li>2. Going Further - <a href='https://goingfarther.net'>https://goingfarther.net</a></li>
              <li>3. Search For Jesus - <a href='http://searchforjesus.net'>http://searchforjesus.net</a></li>
            </ul >
            <h4>Continuing Education:</h4>
            <ul>
              <li>Asia Biblical Theological Seminary (locations in SE Asia) - <a href='//abts.cornerstone.edu'>abts.cornerstone.edu</a></li>
              <li>Baptist Bible College &amp; Seminary (online distance education) - <a href='//www.bbc.edu/online'>www.bbc.edu/online</a></li>
              <li>Bob Jones University (online distance education) - <a href='//www.bju.edu/bjuonline'>www.bju.edu/bjuonline</a></li>
              <li>Cornerstone University &amp; Grand Rapids Theological Seminary (online distance education) - <a href='//online.cornerstone.edu/programs/ministry'>online.cornerstone.edu/programs/ministry</a></li>
              <li>Moody Bible Institute &amp; Theological Seminary (online distance education) - <a href='//www.moody.edu/edu_dlochannelmain.aspx?id=4116'>www.moody.edu/edu_dlochannelmain.aspx?id=4116</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ResourcesSection;
