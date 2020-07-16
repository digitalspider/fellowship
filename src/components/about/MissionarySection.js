import React from 'react';

const imgStyleRight = {
  float: 'right',
  border: '3px solid #dcd4c5',
  marginLeft: 20,
  marginBottom: 10,
};

const MissionarySection = (props) => {
  return (
    <div>
      <h2>Horacio and Sara Brancatelli</h2>
      <h4>in Buenos Aires, Argentina</h4>
      <p><img src='/img/missionary/daniel_nelly_delafuente.jpg' alt='Daniel and Nelly' style={imgStyleRight} height='205px' width='250px'></img></p>
      <p>
        Horacio and Sara minister in a missionary church plant at Villa Crespo under 
        Biblical Ministries Worldwide. Originally begun by the Australian missionaries, 
        Daniel and Nelly De la Fuente, Horacio became pastor when the De la Fuente’s retired from the field. 
        Horacio is a former police officer, and Sara is the daughter of an American missionary to Argentina.
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <h2>Jane and Steve Gibb</h2>
      <h4>Serving the Asia/Pacific with Biblical Ministries Worldwide</h4>

      <p><img src='/img/missionary/gibb_P1000859_2_4.jpg' alt='Gibb Family' style={imgStyleRight} height='225px' width='300px'></img></p>
      <p>
        Steve and Jane are seasoned missionaries and church planters. 
        Since leaving the mission field in Vanuatu, Steve has worked as the Asia/Pacific regional director, 
        overseeing the vast family of BMW missionaries in this part of the world, and recruiting 
        more missionaries for the field.
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <h2>Chris and Fiona Tyrrell</h2>
      <h4>Ministering in Nagishot, South Sudan</h4>
      <p><img src='/img/missionary/chris_fiona_P1000740.jpg' alt='Chris and Fiona Tyrrell' style={imgStyleRight}></img></p>
      <p>
        Chris and Fiona serve under the Africa Inland Mission. Their mission assignment began in Rwanda, 
        where they worked with the local churches to help them reach the Rwandan people. 
        Now they are ministering the gospel in Nagishot, South Sudan, encouraging and building the 
        church through their Didinga Focus Team.
      </p>
    </div >
  )
}

export default MissionarySection;
