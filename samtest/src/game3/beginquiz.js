import { Link } from 'react-router-dom';
import './quiz-style.css';
function beginquiz(){
    return(
        <div className = "beginQuizCont">
            <h3>Begin Quiz</h3>
            <h5>After learning about cybersecurity threats<br/> take this quiz to test your knowledge!</h5>
            <Link to= "/quiz"><button className="quizbutton">Begin!</button></Link>
        </div>
    );
}
export default beginquiz;