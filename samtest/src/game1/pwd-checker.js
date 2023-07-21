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

  //progress bar
  const calculatePasswordStrength = (password) => {
    const length = password.length;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const hasMinLength = length >= 8; // Check for minimum length (8 characters)
  
    const conditionsMet =
      hasLowercase + hasUppercase + hasNumber + hasSpecialChar + hasMinLength;
    const strength = conditionsMet / 5;
  
    return { strength, conditionsMet };
  };
  const { strength, conditionsMet } = calculatePasswordStrength(inputValue);
  const passwordStrength = strength * 100;

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

        <div className="progress-bar-container">
          <div
            className={`progress-bar ${
              conditionsMet === 0
                ? 'progress-bar-red'
                : conditionsMet === 1
                ? 'progress-bar-red'
                : conditionsMet === 2
                ? 'progress-bar-orange'
                : conditionsMet === 3
                ? 'progress-bar-orange'
                : conditionsMet === 4
                ? 'progress-bar-yellow'
                : conditionsMet === 5
                ? 'progress-bar-green'
                : 'progress-bar-green'
            }`}
            style={{
              width: `${passwordStrength}%`,
            }}
          />
        </div>
      </div>
        
      </div>



);
}

export default Checker;