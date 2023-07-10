import logo from './logo.svg';
import './App.css';


function scrolltoLogin() {
  const section = document.getElementById("logintab");
  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth"
  });

}

  function scrolltoGames() {
    const section = document.getElementById("gamestab");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  
}
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
        <button class="headin" onclick= ""><h2 class="headings">About</h2></button>
        <button class="headin" onclick={scrolltoLogin}><h2 class="headings">Login</h2></button>
        <button class="headin" onclick={scrolltoGames}><h2 class="headings">Games</h2></button>  
    </div>

    <div class="developed">Developed by Sameeksha Abhijit Nair, Sajen Vasuthevan and Jasnoor Mallhi</div>
</div>

<div id = "gamestab">
    <h3 class="games-heading">GAMES</h3>
    <a href="games/game1/game1.html" class="game1"><img src="pictures\password_strength.png" alt="password_strength" class="games"></img></a>
    <a href="games/game1/game1.html" class="game1"><img src="pictures\phishing.jpeg" alt="phishing" class="games"></img></a>
</div>

<div id = "logintab">
    <div class="login-form">
        <h3 class="login-heading">Login</h3>
        <form class="login">
            <input type="text" id="username" name="username" required placeholder="Username"></input>
            <br></br>
            <input type="password" id="password" name="password" required placeholder="Password"></input>
            <br></br>
            <div class="rememberme">
                <input type="checkbox" id="remember" name="rememberme"></input>
                <label for="rememberme">Remember Me</label>
                <a href="">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            
        </form>
        <h4>Or</h4>
        <a href="#createtab">Create an Account</a>
    </div>
    
</div>
    <div id = "createtab">
        <div class="login-form">
            <h3 class="login-heading">Create Account</h3>
            <form class="login">
                <input type="text" id="username" name="username" required placeholder="Username"></input>
                <br></br>
                <input type="password" id="password" name="password" required placeholder="Password"></input>
                <br></br>
                <input type="password" id="passwordcheck" name="passwordcheck" required placeholder="Confirm Password"></input>
                <button type="submit">Create</button>    
            </form>
        </div>
    </div>
</div>
    
  );
}

export default App;
