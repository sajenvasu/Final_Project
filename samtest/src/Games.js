import {forwardRef} from 'react';
import password from './pictures/password_strength.png';
import phishing from './pictures/phishing.JPEG';
import './App.css';

import './game1/start';
import { Link } from 'react-router-dom';

function Games(props, ref){
    return(
    <div>
        <div id = "gamestab" ref={ref}>
            <h3 class="games-heading">GAMES</h3>
            <Link class="game1" to ="/start"> <img src={password} alt="password_strength" class="games"></img>  </Link>
            <a href="games/game1/game1.html" class="game1"><img src={phishing} alt="phishing" class="games"></img></a>
        </div>
    </div>
    
    );
}

export default forwardRef(Games);