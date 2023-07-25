import React, { useEffect, useRef } from "react";

function CanvasAnimation() {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
  
      // Making the canvas full screen
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
  
      // Chinese characters - taken from the unicode charset
      let chinese = "asdfghjklㅊㅊㄱㄷ배ㅜㅍㅎㅋㅌ=@?^*1234567890qwertyuiopzxcvbnm!";
      // Converting the string into an array of single characters
      chinese = chinese.split("");
  
      const font_size = 25;
      const columns = canvas.width / font_size; // Number of columns for the rain
      // An array of drops - one per column
      const drops = [];
      // x below is the x coordinate
      // 1 = y coordinate of the drop (same for every drop initially)
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
  
      // Drawing the characters
      function draw() {
        // Black BG for the canvas
        // Translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        ctx.fillStyle = "#0F0"; // Green text
        ctx.font = font_size + "px arial";
  
        // Looping over drops
        for (let i = 0; i < drops.length; i++) {
          // A random Chinese character to print
          const text = chinese[Math.floor(Math.random() * chinese.length)];
          // x = i * font_size, y = value of drops[i] * font_size
          ctx.fillText(text, i * font_size, drops[i] * font_size);
  
          // Sending the drop back to the top randomly after it has crossed the screen
          // Adding randomness to the reset to make the drops scattered on the Y axis
          if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
  
          // Incrementing Y coordinate
          drops[i]++;
        }
      }
  
      const interval = setInterval(draw, 100);
  
      // Clean up
      return () => clearInterval(interval);
    }, []);
  
    return <canvas ref={canvasRef} />;
  }

  export default CanvasAnimation;