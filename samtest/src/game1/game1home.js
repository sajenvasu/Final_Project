
import React, { useState } from 'react';
import CanvasAnimation from "./CanvasAnimation";
import image from './images/sajen.PNG';
import './DialogBox.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function Game1Home() {

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

  return (
    
    
          <div className="home">
            <CanvasAnimation />
            <div className="dialog-box">
              <div className="dialog-content">
                <p>Hi, I'm Sajen! </p>
                <p>Can you help me create a password for my Disney Plus account. Keep it simple so it's easy to share it with my friends and family.</p>
                <p>Use my pet's name: Akilee. It is easy to remember and share.</p>
              </div>
              <div className="arrow-left"></div>
            </div>
            <img src={image} alt="sajenpic" style={{ position: 'absolute', bottom: 0, left: -90, width: '600px', height: 'auto', zIndex:'10' }} />
            <div className="lvl1"> Level 1</div>

            

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

        <button>Enter</button>
        </div>

        <div className="hintbut"  onClick={toggleInfoBox}>
          Hint
        </div>
        {isVisible && (
        <div className="hintbox"> 
          In your password, use: 

          <ul>
          <li>The word: 'Akilee'</li>
          <li>Capital leters</li>
          <li>Numbers</li>
          </ul>
          
           </div>

          )}

          </div>
        
  );
}



export default Game1Home;