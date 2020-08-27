import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageIntro.css';

const HomePageIntro = (props) => {

  return (
    <div className="home-page-intro">
      <h2>Who we are?</h2>
      <p>Fellowship Baptist Church is a medium-sized family church, serving the suburbs of Blacktown. Whether you are curious about Christianity or looking for a church home, you will find us to be friendly and helpful—a real fellowship. You are welcome to join us this Sunday! We show love and reverence for God in our songs, prayers, giving, and messages from His Word.</p>
      <Link to="/about" className="button mp-button mp-button-find-out-more fa-user mp-button-icon-before btn-about-us">Find out more</Link>
    </div>
  );
}

export default HomePageIntro;
