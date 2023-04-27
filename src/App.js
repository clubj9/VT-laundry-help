import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);

  function toggleImage1() {
    setShowImage1(!showImage1);
  }

  function toggleImage2() {
    setShowImage2(!showImage2);
  }

  function toggleImage3() {
    setShowImage3(!showImage3);
  }

  return (
    <div className="App">
      <h1 className="title">Laundry Application Statistics </h1>
      <p>The following are graphs with Statistics for Laundry<br />Each Displays Laundry Use</p>
      <div className="button-container">
        <button onClick={toggleImage1}>Hours Over a Day</button>
        {showImage1 && (
          <div>
            <img src=<img src="/images/laundry use by month.png"/>/>
          </div>
        )}
        <button onClick={toggleImage2}>Day Over a Week</button>
        {showImage2 && (
          <div>
            <img src="/images/week.png"  width="500" height="300"/>
          </div>
        )}
        <button onClick={toggleImage3}>Days Over a Month</button>
        {showImage3 && (
          <div>
            <img src="/images/actual laundry use by month.png"  width="500" height="300"/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
