import React from 'react';
import './Page.css';

function Page(props) {
  return (
    <div className="page">
      {props.children}
    </div>
  )
}

export default Page;
