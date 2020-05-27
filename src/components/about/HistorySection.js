import React from 'react';

const imgStyle = {
  border: '3px solid #ffffff',
  marginLeft: 20,
  marginRight: 20,
  marginTop: 10,
  marginBottom: 10,
};

const HistorySection = (props) => {
  return (
    <div>
      <h2>HISTORY</h2>

      <p><img src='/img/history/Scan10001.jpeg' alt='early church family' style={imgStyle} align='right'></img></p>

      <p>In 1988, several Christian families met regularly in Blacktown for Bible study and encouragement.
        They met in their homes and then in Blacktown West Public School. Frank and Paulle Kwok joined them and
        helped to officially establish Fellowship Baptist Church in 1990. Frank became the church’s pastor after
        his ordination the same year. A Sunday School was established and thechurch began reaching out to the community
        with the Gospel.The church also enjoyed its first annual camp.
      </p>

      <p>Missionary Steve Gibb served as an elder from 1990 to 1992. During his ministry, the church formed a choir
        and organized the first Holiday Bible Club, a children’s outreach. Growing out of its facilities, the church
        began meeting in Walters Road Public School in 1991. Fellowship supported Steve and wife Jane as the church’s
        first missionaries when they moved to Queensland to lead a church there.
      </p>

      <p><img src='/img/history/Scan10002.jpeg' alt='choir singing' style={imgStyle} align='left'></img></p>

      <p>Throughout the nineties, the congregation progressed with faithful Bible teaching, caring fellowship
        and community outreach. From its beginning, the church has held two worship services on Sundays and
        a midweek meeting for prayer and Bible study. In 1995, an AWANA club was formed to teach the Bible to children.
      </p>

      <p>Pastor Frank led the church's evangelistic and discipleship ministries. Across Blacktown,
        thousands of homes were visited by church members bearing the Gospel message. Each year, new Christians
        were baptized and welcomed into the church.
      </p>

      <p><img src='/img/history/Scan10009.jpeg' alt='preaching' style={imgStyle} align='right'></img></p>

      <p>Mike Kwok began serving as an elder in 1998. New children’s ministries (24/7 and Patch Clubs; Mums n' Tots)
        were formed and the teen group began meeting regularly. By God’s gracious provision, the church purchased its
        current property in 1999. Formerly a commercial property, the building serves the church’s purpose well with multiple
        rooms for small groups and seating for over 150. Care groups were introduced in 2002, providing opportunities for
        fellowship in homes.
      </p>

      <p>More deacons were appointed to ministries and the church benefited from missionaries Matt and Barb Douglas
        and Bill and Bonnie Otto, who assisted with various ministries during 2001 to 2004.
        Matt Douglas partnered with Sam Baissari to plant Glorious Hope Baptist Church in Wentworthville in 2003.
        Ben Kwok began serving as an interim elder in 2004.  He has since planted a church in the growing suburb of Rouse Hill.
      </p>

      <p><img src='/img/history/congregation.jpg' alt='congregation' style={imgStyle} align='left' width='400px' height='300px'></img></p>

      <p>In 2005 Fellowship Baptist Church became self-supporting, no longer receiving financial assistance from other churches.
        The congregation now includes various ethnic groups which reflect Blacktown's diversity.
        The church helps to support five missionary families and helped establish the church in Rouse Hill.
      </p>

      <p>Fellowship is currently involved in a multi-year project to expand the building, in order to provide a
        larger auditorium and rooms for fellowship and learning.  We have also expanded our elder board to include Tony Wardan,
        a former missionary, and Brian Eggert, an American missionary serving under ABWE.
      </p>

      <p>Under God's sovereign hand, Fellowship Baptist Church will continue to glorify God as a loving fellowship
        who seek to live like Christ and lead others to follow Him.
      </p>

      <p><img src='/img/history/church_front.jpeg' alt='church front' style={imgStyle} align='right'></img></p>
    </div>
  )
}

export default HistorySection;
