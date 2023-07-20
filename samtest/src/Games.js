import {forwardRef} from 'react';
import password from './pictures/password_strength.png';
import phishing from './pictures/phishing.JPEG';
import './App.css';

import './game1/start';
import './game2/game2start';
import { Link } from 'react-router-dom';

function Games(props, ref){
    return(
    <div>
        <div id = "gamestab" ref={ref}>
            <h3 class="games-heading">GAMES</h3>
            <Link class="game1" to ="/start"> <img src={password} alt="password_strength" class="games"></img>  </Link>
            <Link class="game2" to ="/game2start"><img src={phishing} alt="phishing" class="games"></img></Link>
        </div>
    </div>
    
    );
}

export default forwardRef(Games);