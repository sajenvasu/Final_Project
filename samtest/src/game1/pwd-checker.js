import CanvasAnimation from "./CanvasAnimation";
import React, { useEffect, useRef, useState } from 'react';
import startSound from './sounds/checker.mp3';
import './password-meter.css';
import { Link } from 'react-router-dom';

function Checker() {

    //audio:
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


const [isVisible, setIsVisible] = useState(false);

  const toggleInfoBox = () => {
    setIsVisible(!isVisible);
  };

  //pwd meter:

    return (
    

        <div className="home">
          <CanvasAnimation />
          <audio ref={audioRef} src={startSound} loop />


          <Link className="backbut" to="/start">
          Back to Home
        </Link>

        <div className="infobut"  onClick={toggleInfoBox}>
          info
        </div>
        {isVisible && (
        <div className="infobox"> 
          A strong password can consist of: 

          <ul>
          <li>Lowercase leters</li>
          <li>Capital leters</li>
          <li>Numbers</li>
          <li>At least 8 characters long</li>
          <li>Special characters</li>
          </ul>
          
          Do not make it easy to guess. </div>

          )}
      </div>



);
}

export default Checker;