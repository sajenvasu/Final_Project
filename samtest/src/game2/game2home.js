import React, { useState, useEffect } from 'react';
import './game2start.css';
import { Link } from 'react-router-dom';

const Game2Home = () => {
  const [dialogState, setDialogState] = useState(1);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  useEffect(() => {
    setText1(
      "Welcome to my study area. In this current world, there are numerous ways to fall for a phishing scam. Today I will help you learn how to detect, and avoid these scams with some real-life examples."
    );
  }, []);

  const typeText = (containerId, message) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    let text = '';
    let currentChar = 0;

    if (containerId === 'dialog1-message') {
      setText1(message);
      text = text1;
      currentChar = text1.length > 0 ? text1.length : currentChar;
    } else if (containerId === 'dialog2-message') {
      setText2(message);
      text = text2;
      currentChar = text2.length > 0 ? text2.length : currentChar;
    } else if (containerId === 'dialog3-message') {
      setText3(message);
      text = text3;
      currentChar = text3.length > 0 ? text3.length : currentChar;
    }

    const typing = setInterval(() => {
      if (currentChar < text.length) {
        container.innerHTML += text.charAt(currentChar);
        currentChar++;

        if (containerId === 'dialog1-message') {
          setText1(text.substring(0, currentChar));
        } else if (containerId === 'dialog2-message') {
          setText2(text.substring(0, currentChar));
        } else if (containerId === 'dialog3-message') {
          setText3(text.substring(0, currentChar));
        }
      } else {
        clearInterval(typing);
      }
    }, 50);
  };

  const showDialog = () => {
    if (dialogState === 1) {
      setDialogState(2);
      typeText(
        'dialog2-message',
        "The most common phishing attacks are sent by email. A phishing email is a type of cyberattack that uses deception to obtain sensitive information from people and organizations. Victims are tricked into disclosing personal information, the attackers then use it to impersonate you and apply for credit cards or loans, open bank accounts, and commit other fraudulent acts."
      );
    } else if (dialogState === 2) {
      setDialogState(3);
      typeText(
        'dialog3-message',
        "Now that you know what a phishing email is, let us look at some examples to see if you can detect the scams from the most simplest of details."
      );
    } else if (dialogState === 3) {
     
      console.log("Redirecting to the next page...");
      return (
        <Link to="/email1">
          <div className="dialog-container hidden" id="dialog3">
            <h6>Let's Get Started!</h6>
            <p id="dialog3-message">{text3}</p>
            <button>Ready!</button>
          </div>
        </Link>
      );
    }
  };

  return (
    <>
      <div className="backgroundhome">
        <div className="dialog-container" style={{ opacity: dialogState === 1 ? 1 : 0 }}>
          <h6>Hi, I'm Sam!</h6>
          <p id="dialog1-message">{text1}</p>
          <button onClick={showDialog}>Next</button>
        </div>

        <div className={`dialog-container ${dialogState !== 2 ? 'hidden' : ''}`}>
          <h6>What is a Phishing Email?</h6>
          <p id="dialog2-message">{text2}</p>
          <button onClick={showDialog}>Next</button>
        </div>

        
        <Link to="/email1" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className={`dialog-container ${dialogState !== 3 ? 'hidden' : ''}`}>
            <h6>Let's Get Started!</h6>
            <p id="dialog3-message">{text3}</p>
            <button>Ready!</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Game2Home;