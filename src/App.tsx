import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [welcomeClass, setWelcomeClass] = useState('welcome')

  // add the animation
  useEffect(() => {
    setTimeout(() => {
      setWelcomeClass('dissapear')
    }, 1000)
  }, [])

  // deploy comment
  return (
    <div className="App">
      <div className="titleContainer">
        <h1 className='title'>
          <span className={welcomeClass}>Welcome to </span>
          WALKIES
        </h1>
      </div>
      <div className="inforStatementContainer">
        <h3>Please fill in your information to be matched with a dog partner!</h3>
      </div>
      <div className="iframeContainer">
        <iframe title='dubsado form' src="https://hello.dubsado.com:443/public/form/view/60d9fd97727c3a504ed9e9ce" style={{
          width: "1px",
          minWidth: "100%",
          height: "600px"
        }}></iframe>

      </div>
    </div>
  );
}

export default App;
