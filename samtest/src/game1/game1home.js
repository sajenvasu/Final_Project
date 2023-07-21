
import React from 'react';
import CanvasAnimation from "./CanvasAnimation";
import image from './images/sajen.PNG';
import './DialogBox.css';

function Game1Home() {

  return (
    
    
          <div className="home">
            <CanvasAnimation />
            <div className="dialog-box">
              <div className="dialog-content">
                <p>I need HELP....</p>
              </div>
              <div className="arrow-left"></div>
            </div>
            <img src={image} alt="sajenpic" style={{ position: 'absolute', bottom: 0, left: -90, width: '600px', height: 'auto' }} />
      
          </div>
        
  );
}



export default Game1Home;