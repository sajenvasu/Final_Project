import React, { useEffect, useRef } from 'react';
import './start.css';
import './game1home';

import { Link } from 'react-router-dom';

import startSound from './sounds/start.wav';

function Start() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio playback started successfully
          })
          .catch((error) => {
            // Audio playback failed
            console.log('Failed to play audio:', error);
          });
      }
    }
  }, []);

  

  return (
    <div className="start">
      <div className="container">
        <div className="title"> 
        Secure Meter
        </div>
        <h5>Strengthen Your Password</h5>
        <br />
        <br />
        
        <Link className="start-link" to="/game1home">
          Start Game    
        </Link>
     
        <h3>or</h3>

        <Link className="start-link" to="/pwd-checker">
          Check Password Strength
        </Link>

        
        
      </div>

      <audio ref={audioRef} src={startSound} loop />
    </div>
  );
}

export default Start;