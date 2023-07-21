import CanvasAnimation from "./CanvasAnimation";
import React, { useEffect, useRef, useState } from 'react';
import startSound from './sounds/checker.mp3';
import './password-meter.css';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

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
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

        <div className="meterbox">
          <p>Password Strength Meter</p>
          <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              top: '70%',
              right: '7%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              fontSize: '30px',
            }}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
          
        </div>

     


        </div>
      </div>



);
}

export default Checker;