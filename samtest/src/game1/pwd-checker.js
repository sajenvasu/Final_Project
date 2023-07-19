import CanvasAnimation from "./CanvasAnimation";
import React, { useEffect, useRef, useState } from 'react';
import startSound from './sounds/checker.mp3';

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

//pwd meter:


    return (
    

        <div className="home">
          <CanvasAnimation />
          <audio ref={audioRef} src={startSound} loop />
      </div>



);
}

export default Checker;