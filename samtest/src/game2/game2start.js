import React, { useEffect, useRef } from 'react';
import './game2start.css'; 
import { Link } from 'react-router-dom';
import startSound from './sounds/bubbless2.wav';

const Game2Start = () => {

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

  return (
    <>
<div className="background">
      <div className="title">
        <h1>Phish Hunt</h1>
        <h2>Learn to spot the scams</h2>
        <audio ref={audioRef} src={startSound} loop />
      </div>

      <Link className="start-link" to="/game2home">
        Start
      </Link>
      </div>
    </>
  );
};

export default Game2Start;