
import React, { useState, useEffect } from 'react';
import CanvasAnimation from "./CanvasAnimation";
import image from './images/sajen.PNG';
import './DialogBox.css';
import './password-meter.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Lvl2() {

  

  const [isVisible, setIsVisible] = useState(false);

  const toggleInfoBox = () => {
    setIsVisible(!isVisible);};
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


//dialog next but
const [dialogState, setDialogState] = useState(1);

  //score
  const [score, setScore] = useState(0);

const text1 = "Can you help me create an even stronger password. Click the hint button on the bottom left to see other requirements."; 
const text2 = "Good job! You have met all the requirements. Press enter to go to the next level.";

//progress bar
const calculatePasswordStrength = (password) => {
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasWord = /Akili/i.test(password); 
  const hasMinLength = password.length >= 8;

  const conditionsMet =
    hasLowercase + hasUppercase + hasNumber + hasMinLength + !(hasWord ? 1 : 0);
  const strength = conditionsMet / 5;

  return { strength, conditionsMet };
};
const { strength, conditionsMet } = calculatePasswordStrength(inputValue);
const passwordStrength = strength * 100;

//all conditions met show third dialog
const [allConditionsMet, setAllConditionsMet] = useState(false);

  useEffect(() => {
    const { conditionsMet } = calculatePasswordStrength(inputValue);
    setAllConditionsMet(conditionsMet === 5);
    setScore((prevScore) => 15 + conditionsMet * 5);
    if (conditionsMet === 5) {
      setDialogState(3);
    }
  }, [inputValue]);

  return (
    
    
          <div className="home">
            <CanvasAnimation />

            <div className="game1score">
            Score: {score}
            </div>
            
              <div className="dialog-content">
              

      <div className={`dialog-box ${dialogState === 1 ? 'visible' : 'hidden'}`}>
      <p>It's me again!</p>
        <p id="dialog2">{text1}</p>
        <div className="arrow-left"></div>
      </div>

      {allConditionsMet && (
          <div className= "dialog-box">
            <p>{text2}</p>
            <div className="arrow-left"></div>
          </div>
        )}
              
            </div>
            <img src={image} alt="sajenpic" style={{ position: 'absolute', bottom: 0, left: -90, width: '600px', height: 'auto', zIndex:'10' }} />
            <div className="level"> Level 2</div>

            

            <div className="meterbox1">
          <p>Enter the password here:</p>
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
              top: '60%',
              right: '26%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              fontSize: '30px',
            }}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}

            
          </span>
        </div>

        <div className="progress-bar-game">
          <div
            className={`progress-bar ${
              conditionsMet === 0
                ? 'progress-bar-trans'
                : conditionsMet === 1
                ? 'progress-bar-trans'
                : conditionsMet === 2
                ? 'progress-bar-red'
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
        {conditionsMet === 5 && (
          <Link to="/lvl3">
        <button>Enter</button>
        </Link>

        

        )}

        </div>

        <div className="hintbut"  onClick={toggleInfoBox}>
          Hint
        </div>
        {isVisible && (
        <div className="hintbox"> 
          In your password, use: 

          <ol>
          <li>Lowercase letters</li>
          <li>Capital letters</li>
          <li>Numbers</li>
          <li>At least 8 characters long</li>
          </ol>
          Do not use previous passwords.
           </div>

          )}

          </div>
        
  );
}



export default Lvl2;