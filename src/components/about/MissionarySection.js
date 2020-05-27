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
      <h2>Dave and Julie Crowe - Papua New Guinea</h2>

      <p><img src='/img/missionary/Dave_Jane_Crow2017A.jpg' alt='Dave and Julie Crowe' style={imgStyleRight} height='243px' width='250px'></img></p>

      <p>Children: Samuel, Lydia, Elisabeth, Tabitha, Hadassah </p>
      <p>Since 1992, the Crowes have worked in the Highlands of Papua New Guinea. They have helped to start a number of churches and fellowships and to train many men in ministry. </p>

      <p>Contact address: </p>
      <p>
        PO Box 562 <br />
        Herberton QLD 4887 <br />
      </p>

      <h2>Daniel and Nelly De la Fuente - Church planting in Buenos Aires</h2>
      <p><img src='/img/missionary/daniel_nelly_delafuente.jpg' alt='Daniel and Nelly' style={imgStyleRight} height='205px' width='250px'></img></p>

      <p>Daniel & Nelly have served in Buenos Aires since 2003 to plant and help Bible-believing churches. They are leading in two churches, Bible Baptist Church in Chacarita and a growing fellowship in Gonzalez Catan, southwest of the city.</p>

      <p>Contact address: </p>
      <p>
        Mendoza 5180 3B <br />
        1431 Villa Urquiza <br />
        Capital Federal <br />
        Buenos Aires <br />
        Argentina<br />
      </p>

      <h2>Jane and Steve Gibb - Vanuatu</h2>

      <p><img src='/img/missionary/gibb_P1000859_2_4.jpg' alt='Gibb Family' style={imgStyleRight} height='225px' width='300px'></img></p>

      <p>Children: Matthew, Tiffany, Jennifer, Emily, Ethan, Rose </p>

      <p>Steve & Jane have been serving in Vanuatu since 2006.  They work in church ministries, with the University of South Pacific students, and training local pastors.</p>

      <p>Contact address:</p>
      <p>
        c/o SIL Vanuatu <br />
        PO Box 174 <br />
        Port Vila, Vanuatu<br />
      </p>
      <p>Email: sgibb@biblicalministries.org </p>

      <h2>Martinovici Family - Romanian church planting in Sydney</h2>
      <p><img src='/img/missionary/martinovici_family.jpg' alt='Martinovici family' style={imgStyleRight}></img></p>

      <p>The Martinovici Family serve at the Sola Scriptura Romanian Baptist Church, where Elijah is the pastor.</p>
      <p>The church's website is <a href="//www.solascriptura.org.au">www.solascriptura.org.au</a></p>
      <p>Contact address: </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <h2>Chris and Fiona Tyrrell - Teaching English in Rwanda</h2>
      <p><img src='/img/missionary/chris_fiona_P1000740.jpg' alt='Chris and Fiona Tyrrell' style={imgStyleRight}></img></p>

      <p>Chris and Fiona serve under the Africa Inland Mission, and their goal is to aid in the training of Rwandan believers to minister to their own people.  Chris teaches English to the seminary students, and Fiona works with other missionary ladies and their families.</p>

      <p>Contact address: </p>
      <p>
        BP 1299 Kigali, Rwanda<br />
        Tel:  250 785377626<br />
      </p>
      <p>Email:  cftyrrell@aimint.net</p>
    </div >
  )
}

export default MissionarySection;
