import React from 'react';

const imgStyle = {
  border: '3px solid #ffffff',
  marginLeft: 20,
  marginRight: 20,
  marginTop: 10,
  marginBottom: 10,
};

function History(props) {
  return (
    <div>
      <h2>HISTORY</h2>

      <p><img src='/img/history/Scan10001.jpeg' alt='early church family' style={imgStyle} align='right'></img></p>

      <p>In 1988, several Christian families met regularly in Blacktown for Bible study and encouragement.
      They met in their homes and then in Blacktown West Public School. Frank and Paulle Kwok joined them and
      helped to officially establish Fellowship Baptist Church in 1990. Frank became the church’s pastor after
      his ordination the same year. A Sunday School was established and the church began reaching out to the community
      with the Gospel.
      </p>

      <p>Missionary Steve Gibb served as an elder from 1990 to 1992. During his ministry, the church formed a choir
      and organized the first Holiday Bible Club for children. Growing out of its facilities, the church began meeting
      in Walters Road Public School in 1991. Fellowship supported Steve and wife Jane as the church’s first missionaries
      when they moved to Queensland to pastor a church there.
      </p>

      <p><img src='/img/history/Scan10002.jpeg' alt='choir singing' style={imgStyle} align='left'></img></p>

      <p>Throughout the nineties, the congregation progressed with faithful Bible teaching, caring fellowship
      and community outreach. In 1995, an AWANA club was formed to teach the Bible to children.
      </p>

      <p>Mike Kwok, Frank’s son, began serving as an elder in 1998. New children’s ministries were subsequently formed,
      and the teens began meeting regularly. By God’s gracious provision, the church purchased its current property
      in 1999 with seating for over 150. Care groups were introduced in 2002, providing opportunities for fellowship in homes.
      </p>

      <p><img src='/img/history/Scan10009.jpeg' alt='preaching' style={imgStyle} align='right'></img></p>

      <p>In 2010, an American missionary family, the Eggert family, joined Fellowship.
      Brian Eggert was ordained as an elder and took on the ministry of corporate worship and teaching.
      </p>

      <p><img src='/img/history/congregation.jpg' alt='congregation' style={imgStyle} align='left' width='400px' height='300px'></img></p>

      <p>In 2018, after faithfully serving Fellowship Baptist for 28 years, the Lord called Pastor Frank home.
      In the following year, Paul Weber became an elder. The Weber family is also an American missionary family with ABWE.
      Paul brought his gift of teaching and pastoral care.
      </p>

      <p>Today, the congregation includes various ethnic groups which reflect Blacktown's diversity.
      The church helps to support missionary families and pastors around the world, and they assisted in planting two other churches in the Sydney region.
      </p>

      <p>Fellowship is currently involved in a multi-year project to renovate the building, in order to serve the growing needs of the congregation.
      </p>

      <p>Under God's sovereign hand, Fellowship Baptist Church will continue to glorify God as a loving fellowship of Christlike disciplemakers.
      </p>

      <p><img src='/img/history/church_front.jpeg' alt='church front' style={imgStyle} align='right'></img></p>
    </div>
  )
}

export default History;
