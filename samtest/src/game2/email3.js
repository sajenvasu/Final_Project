import React, { useState } from 'react';
import './email.css'; 
import uwin from './images/uwin.png';

import { Link } from 'react-router-dom';

const DescriptionsBox = ({ descriptions }) => {
    return (
      <div className="description3">
        {descriptions.map((description, index) => (
          <div key={index} className="description-item">
            {description}
          </div>
        ))}
      </div>
    );
  };

const Email1 = () => {
    const [score, setScore] = useState(0);
    const [descriptions, setDescriptions] = useState([]);
    const [clickedLines, setClickedLines] = useState([]);
    const [resultShown, setResultShown] = useState(false);
  
    const showDescription = (description, index) => {
      if (!clickedLines.includes(index)) {
        setClickedLines((prevClickedLines) => [...prevClickedLines, index]);
        setDescriptions((prevDescriptions) => [...prevDescriptions, description]);
        if (index > 0) {
          setScore((prevScore) => prevScore + 1);
        } else {
          setScore((prevScore) => prevScore - 1);
        }
      }
    };

    const showDescription2 = (description, index) => {
        if (!clickedLines.includes(index)) {
          setClickedLines((prevClickedLines) => [...prevClickedLines, index]);
          setDescriptions((prevDescriptions) => [...prevDescriptions, description]);
          if (index > 0) {
            setScore((prevScore) => prevScore - 1);
          } else {
            setScore((prevScore) => prevScore - 1);
          }
        }
      };
  
    const showResult = (url) => {
      setResultShown(true);
    };
  
    return (
      <>
        {resultShown ? (
          <div className="result-box">
            <p>Score: {score}/5</p> 
            <Link to="../">
            <button>Next</button>
            </Link>
          </div>
        ) : null}
  
        <div className="score" id="score">
          Score: {score}/5
        </div>
        <div className="backgroundemail1">
        <div className="rectangle3">
          What is wrong with this email?
          <div className="overlay">
          <div style={{ textAlign: 'center' }}>
            <img src={uwin} alt="Uwin logo" width="250" height="90" />
        </div>
            <div className="email-header"><span onClick={() => showDescription2('1. This is not suspecious at all.', 1)}>
            From: finance-noreply@uwindsor.ca <span className={`icon ${clickedLines.includes(1) ? 'wrongchecked' : ''}`}>1</span>
            </span></div> 
            
            <div className="email-header"><span onClick={() => showDescription('2. Scammers like to BCC the recipients emails when they are sending something to a long list of people. Make sure something as important as this is addressed to you alone.', 2)}>
            To: <span className={`icon ${clickedLines.includes(2) ? 'checked' : ''}`}>2</span>
            </span></div>

            <div className="email-subject">Subject: Inter/Summer Tuition</div>

            <div className="email-body">

            <p>  
            We are writing to notify you about an urgent matter regarding your university tuition payment for the current semester.
             </p>
             <p>It has come to our attention that your tuition payment has not been completed. </p>

            <p onClick={() => showDescription('3. Do not trust this email. Go to check the website yourself to make sure. The statement is likely false.', 3)}>
            Due to the UWindsor Student website not being in operation for the next few days, we advise you to cantact us immidiatly through our financial helpline indicated below. <span className={`icon ${clickedLines.includes(3) ? 'checked' : ''}`}>3</span>
            </p>
            
            <p onClick={() => showDescription('4. Whenever you are given a phone number, make sure it is official. A scammer will pretend to be a school financial representative on the phone, ready to get more information from you.', 4)}>
            <u>509-234 5676</u> <span className={`icon ${clickedLines.includes(4) ? 'checked' : ''}`}>4</span>
            </p>

            <p onClick={() => showDescription('5. Phishing scams often create a false sense of urgency or rely on emotional manipulation to get you to act quickly.', 5)}>
            It is crucial to note that if the outstanding tuition payment is not received within the next 24 hours, interest will begin to accumulate on the unpaid balance. We strongly urge you to take immediate action to prevent further financial implications. <span className={`icon ${clickedLines.includes(5) ? 'checked' : ''}`}>5</span>
            </p>

            <p onClick={() => showDescription('6. This was a trickey one! Here we have a gramatical error. It should be effect not affect and they spelled contact wrong.', 6)}>
            To mitigate any potential adverse affects and ensure the seamless continuation of your studies, we kindly request that you immediately contract our dedicated helpline. <span className={`icon ${clickedLines.includes(6) ? 'checked' : ''}`}>6</span>
            </p>
            
            Thank You. <br />

           
            </div>
          </div>
        </div>
        </div>
  
        <div className="dialog-container-email">
          <div className="dialog-box3">
            <p className="message">Select all the text that is suspicious.</p>
          </div>
        </div>

        <DescriptionsBox descriptions={descriptions} />
  
        <button className="done-button" onClick={() => showResult('email2.html')}>
          Done
        </button>
      </>
    );
  };
  
  export default Email1;