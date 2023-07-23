
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

  const showDialog = () => {
    setDialogState((prevState) => prevState + 1);
  };

const text1 = "Can you help me create a password for my Disney Plus account. Keep it simple so it's easy to share it with my friends and family."; 
const text2 = " Click the hint button on the bottom left to see other requirements.";
const text3 = "Great Work! You've met all the requirements. Click on enter to go to the next level.";

//progress bar
const calculatePasswordStrength = (password) => {
  const length = password.length;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasWord = /Akili/i.test(password); 

  const conditionsMet =
    hasLowercase + hasUppercase + hasNumber + (hasWord ? 1 : 0);
  const strength = conditionsMet / 4;

  return { strength, conditionsMet };
};
const { strength, conditionsMet } = calculatePasswordStrength(inputValue);
const passwordStrength = strength * 100;

//all conditions met show third dialog
const [allConditionsMet, setAllConditionsMet] = useState(false);

  useEffect(() => {
    const { conditionsMet } = calculatePasswordStrength(inputValue);
    setAllConditionsMet(conditionsMet === 4);
    if (conditionsMet === 4) {
      setDialogState(3);
    }
  }, [inputValue]);

  return (
    
    
          <div className="home">
            <CanvasAnimation />
            
              <div className="dialog-content">
              <div className={`dialog-box ${dialogState === 1 ? 'visible' : 'hidden'}`} style={{ opacity: dialogState === 1 ? 1 : 0 }}>
        <p>Hi, I'm Sajen!</p>
        
        <p id="dialog1">{text1}</p>
        <p></p>
        <button onClick={showDialog}>Next</button>
        <div className="arrow-left"></div>
      </div>

      <div className={`dialog-box ${dialogState === 2 ? 'visible' : 'hidden'}`}>
      <p>Use my pet's name: <b>Akili</b>. It is easy to remember and share.</p>
        <p id="dialog2">{text2}</p>
        <div className="arrow-left"></div>
      </div>

      {allConditionsMet && (
          <div className={`dialog-box ${dialogState === 3 ? 'visible' : 'hidden'}`}>
            <p>{text3}</p>
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
                ? 'progress-bar-red'
                : conditionsMet === 1
                ? 'progress-bar-red'
                : conditionsMet === 2
                ? 'progress-bar-yellow'
                : conditionsMet === 3
                ? 'progress-bar-yellow'
                : conditionsMet === 4
                ? 'progress-bar-green'
                : 'progress-bar-green'
                
            }`}
            style={{
              width: `${passwordStrength}%`,
            }}
          />
        </div>
        {conditionsMet === 4 && (
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
          <li>The word: 'Akili'</li>
          <li>Capital leters</li>
          <li>Numbers</li>
          </ol>
          
           </div>

          )}

          </div>
        
  );
}



export default Lvl2;