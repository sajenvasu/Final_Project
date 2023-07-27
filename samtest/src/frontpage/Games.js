import { Link } from 'react-router-dom';
import password from '../pictures/password_strength.png';
import phishing from '../pictures/phishing.JPEG';
import '../App.css';

function Games(){
    return(
    <div className='gPage'>
        <div id = "gamestab">
            <Link to= "/"><img src= 'https://www.freeiconspng.com/uploads/arrow-icon-28.png' alt='Arrow' className='arrow'/></Link>
            <h3 className="games-heading">GAMES</h3>
            <Link className="game1" to ="/start"> <img src={password} alt="password_strength" className="games"></img>  </Link>
            <Link className="game2" to ="/game2start"><img src={phishing} alt="phishing" className="games"></img></Link>
        </div>
    </div>
    
    );
}

export default Games;