import { Link } from 'react-router-dom';
import './quiz-style.css';
function beginquiz(){
    return(
        <div className = "beginQuizCont">
            <h3>Quiz</h3>
            <h5>After learning about cybersecurity threats take <br/>this quiz to test your knowledge!</h5>
            <Link to= "/quiz"><button id="beginquizbutton">Begin!</button></Link>
        </div>
    );
}
export default beginquiz;