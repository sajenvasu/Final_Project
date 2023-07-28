import { Link } from 'react-router-dom';
import './quiz-style.css';
import image from './images/jasnoor.PNG';
import blackboard from './images/blackboard.png';

function beginquiz(){
    return(
        <div className = "beginQuizCont">
            <h3>Quiz</h3>
            <h5>After learning about cybersecurity threats take <br/>this quiz to test your knowledge!</h5>
            <Link to= "/quiz"><button id="beginquizbutton">Begin!</button></Link>

            
            
            <img src={image} alt="jasnoorpic" style={{ position: 'absolute', bottom: 0, left: 10, width: '400px', height: 'auto', zIndex:'10' }} />
        </div>

        
    );
}
export default beginquiz;