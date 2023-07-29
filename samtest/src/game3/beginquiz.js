import { useNavigate } from 'react-router-dom';
import './quiz-style.css';
import image from './images/jasnoor.PNG';

function Beginquiz(){
    const arr = []
    const navigate = useNavigate();
    const wRun = 1;
    const StartQuiz = () => {
        for (let i = 0; i < 5; i++){
            while (wRun === 1){
                var RDValue = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
                if (!arr.includes(RDValue)){
                    arr.push(RDValue);
                    break;
                }
            }
        }
        navigate("/quiz", {state : {arr : arr}});
    }

    return(
        <div className = "beginQuizCont">
            <h3>Quiz</h3>
            <h5>After learning about cybersecurity threats take <br/>this quiz to test your knowledge!</h5>
            <button id="beginquizbutton" onClick={() => StartQuiz()}>Begin!</button>

            
            
            <img src={image} alt="jasnoorpic" style={{ position: 'absolute', bottom: 0, left: 10, width: '400px', height: 'auto', zIndex:'10' }} />
        </div>

        
    );
}
export default Beginquiz;