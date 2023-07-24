import React, { useState } from 'react';
import './email.css'; 
import amazon from './images/amazon.png';
import file from './images/file.png';

import { Link } from 'react-router-dom';

const DescriptionsBox = ({ descriptions }) => {
    return (
      <div className="description2">
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
            <Link to="/email3">
            <button>Next</button>
            </Link>
          </div>
        ) : null}
  
        <div className="score" id="score">
          Score: {score}/5
        </div>
        <div className="backgroundemail1">
        <div className="rectangle2">
          What is wrong with this email?
          <div className="overlay">
            <img src={amazon} alt="Amazon logo" width="290" height="90" />
            <div className="email-header"><span onClick={() => showDescription('1. Amazon or any other legitimate company will not send you an official email using a public domain like gmail. This looks like a personal email address.', 1)}>
            From: Amazon &lt;robert6388@gmail.com&gt; <span className={`icon ${clickedLines.includes(1) ? 'checked' : ''}`}>1</span>
            </span></div> 
            <div className="email-header">To: 'your email'</div>
            <div className="email-subject"><span onClick={() => showDescription('2. The subject line is capitalized to indicate urgency, making the emails appear important. Do not fall for it.', 2)}>
            Subject: PAYMENT DONE, Order Confirmation <span className={`icon ${clickedLines.includes(2) ? 'checked' : ''}`}>2</span>
            </span></div>
            <div className="email-body">
            <p onClick={() => showDescription('3. Most intitutions that use authentication arrangements like a login system will use your given username to address you.', 3)}>
              Hello customer, <span className={`icon ${clickedLines.includes(3) ? 'checked' : ''}`}>3</span>
            </p>
            <p>Thank you for shopping with us.</p>
            <p>We are pleased to confirm that your order has been successfully placed and is being processed. </p>
            
            <p onClick={() => showDescription2('4. Nothing too suspicious yet.', 4)}>
            Please find an attached copy of your order receipt for your reference. The receipt includes a detailed breakdown of your order and payment information.
              <span className={`icon ${clickedLines.includes(4) ? 'wrongchecked' : ''}`}>4</span>
            </p>

            <p onClick={() => showDescription('5. Scammer like to hide malware like trojans or ransomware in attachments. Be careful, do not click on it.', 5)}>
            <img src={file} alt="file-attachment" width="60" height="60"/> <span className={`icon ${clickedLines.includes(5) ? 'checked' : ''}`}>5</span>
            </p>
            
            If you have any questions or need further assistance, please don't hesitate to contact our customer service team.
            Thank you for choosing Amazon. <br />

            <hr />

            <div className="email-end">
              <p onClick={() => showDescription('6. Be sure to read the footer properly. That phone number does not look like its from a local area. The email is also not valid for an organization like Amazon.', 6)}>
              Amazon Customer Service: <br/> + 44 7911 123456 <br/>robert6388@gmail.com
                <span className={`icon ${clickedLines.includes(6) ? 'checked' : ''}`}>6</span>
              </p>
              </div>
            </div>
          </div>
        </div>
        </div>
  
        <div className="dialog-container-email">
          <div className="dialog-box2">
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