import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageIntro.css';

function HomePageIntro(props) {
  return (
    <div className="row intro">
      <div className="column home-page-intro">
        <h2 className="title who-we-are">Who We Are</h2>
        <p className="welcome-text">
          Fellowship Baptist Church is a medium-sized family church, serving the suburbs of Blacktown.
          Whether you are curious about Christianity or looking for a church home, you will find us to be friendly and helpful—a real fellowship.
          You are welcome to join us this Sunday! We show love and reverence for God in our songs, prayers, giving, and messages from His Word.
        </p>
        <Link to="/about" className="btn-about-us">Find out more</Link>
      </div>
      <div className="column">
        <img className="purpose-statement-image" src="/img/purpose_statement.jpg" alt="FBC Purpose Statement" />
      </div>
    </div>
  );
}

export default HomePageIntro;
