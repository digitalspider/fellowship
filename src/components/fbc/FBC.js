import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './FBC.css';

function FBC(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default FBC;
