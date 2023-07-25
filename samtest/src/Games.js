import { Link } from 'react-router-dom';
import password from './pictures/password_strength.png';
import phishing from './pictures/phishing.JPEG';
import './App.css';

function Games(){
    return(
    <div class='gPage'>
        <div id = "gamestab">
            <Link to= "/"><img src= 'https://www.freeiconspng.com/uploads/arrow-icon-28.png' alt='Arrow' class='arrow'/></Link>
            <h3 class="games-heading">GAMES</h3>
            <Link class="game1" to ="/start"> <img src={password} alt="password_strength" class="games"></img>  </Link>
            <Link class="game2" to ="/game2start"><img src={phishing} alt="phishing" class="games"></img></Link>
        </div>
    </div>
    
    );
}

export default Games;