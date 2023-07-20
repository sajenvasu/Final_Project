import React, { useState } from 'react';
import './email.css'; 
import cra from './images/cra.png';
import { Link } from 'react-router-dom';

const DescriptionsBox = ({ descriptions }) => {
    return (
      <div className="description1">
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
            <Link to="/email2">
            <button>Next</button>
            </Link>
          </div>
        ) : null}
  
        <div className="score" id="score">
          Score: {score}
        </div>
        <div className="backgroundemail1">
        <div className="rectangle">
          What is wrong with this email?
          <div className="overlay">
            <img src={cra} alt="CRA logo" width="170" height="90" />
            <div className="email-header">From: Canada Revenue Agency</div>
            <div className="email-header">To: CONSERVATIVE MEMBERS /DEPUTES CONSERVATEURS</div>
            <div className="email-subject">YOUR TAX CALCULATION IS READY</div>
            <div className="email-body">

            <p onClick={() => showDescription('1. Any financial agency or banks will address you by your real name and not a generic salutation. This is very likely a scam.', 1)}>
              Dear taxpayer, <span className={`icon ${clickedLines.includes(1) ? 'checked' : ''}`}>1</span>
            </p>

            <p onClick={() => showDescription2('2. Hmm, there is nothing suspicious about this line.', 2)}>
              This is an automated email, please do not reply. <span className={`icon ${clickedLines.includes(2) ? 'wrongchecked' : ''}`}>2</span>
            </p>

            The review of your income tax liability shows you have overpaid tax for the year.

            <p onClick={() => showDescription('3. Often times money is used as a lure to hook you. Scammers tend to capitalize certain words to tempt you.', 3)}>
              Our calculation shows that you are eligible to receive a tax refund of $788.00 ready to CLAIM NOW.{' '}
              <span className={`icon ${clickedLines.includes(3) ? 'checked' : ''}`}>3</span>
            </p>

            
              Due to the high volume of tax refund payments, you must complete the online application, the telephone
              help line is very busy at the moment and may be unable to assist you. We, therefore, urge applicants to
              complete the online form.
            
            <p onClick={() => showDescription('4. Never click on a suspicious link. Hover over the link to see if it is legit.  Authorized companies do not force you to their website. Login to your account NOT using this link to confirm your status.', 4)}>
              Please click to claim now. <span className={`icon ${clickedLines.includes(4) ? 'checked' : ''}`}>4</span>
            </p>
            Sincerely, <br />
            <span onClick={() => showDescription('5. Scam emails can be recognized by bad grammar and spelling mistakes. Legitimate organization emails are well written.', 5)}>
              Canda Revenue Agncy <span className={`icon ${clickedLines.includes(5) ? 'checked' : ''}`}>5</span>
            </span>{' '}
            <br />
            All Rights Reserved <br />
            <hr />
            <div className="email-end">
            <span onClick={() => showDescription('6. Scammers like to explain why their emails may have ended up in your junk or spam folder. Do not fall for it.', 6)}>
                IMPORTANT NOTE: If you receive this message in spam or junk, it is a result of your network provider.
                Please move this message to your inbox and follow the instructions above.{' '}
                <span className={`icon ${clickedLines.includes(6) ? 'checked' : ''}`}>6</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
  
        <div className="dialog-container-email">
          <div className="dialog-box1">
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