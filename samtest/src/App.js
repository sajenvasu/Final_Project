import './App.css';
import password from './pictures/password_strength.png';
import phishing from './pictures/phishing.JPEG'

function App() {
  return (
        <div class="part1">
            <div class="bg"></div>
            <div class="bgstar">
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            
            <h1>CYBERSECURITY <br></br> GAMES </h1>
            <div class="menu">
                <button class="headin" onclick="scrolltoAbout()"><h2 class="headings">About</h2></button>
                <a href="login.html"><button class="headin"><h2 class="headings">Login</h2></button></a>
                <button class="headin" onclick="scrolltoGames()"><h2 class="headings">Games</h2></button>  
            </div>
    
            <div class="developed">Developed by Sameeksha Abhijit Nair, Sajen Vasuthevan and Jasnoor Mallhi</div>
        </div>
       <div id="react-component-test"></div>
        <div id = "gamestab">
            <h3 class="games-heading">GAMES</h3>
            <a href="games/game1/game1.html" class="game1"><img src={password} alt="password_strength" class="games"></img></a>
            <a href="games/game1/game1.html" class="game1"><img src={phishing} alt="phishing" class="games"></img></a>
        </div>
      </div>
  );
}

export default App;
