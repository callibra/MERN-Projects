import React from 'react';
import './nopage.css'; 

const NoPage = () => {
  return (
    <div className="notfoundContainer">
      <h1 className="notfoundTitle">Error 404: Not Found</h1>
      <p className="notfoundMessage">The content does not exist.</p>
    </div>
  );
};

export default NoPage;

