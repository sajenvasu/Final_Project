import { useNavigate } from 'react-router-dom';
import React, {useState } from 'react';
import './quiz-style.css';
function Quiz(){
    
    const Navigate = useNavigate();
    const [questionCount, setQuestionCount] = useState(0);
    const [prevBtnVal, setPrevBtnVal] = useState(true);
    const [nextBtnVal, setNextBtnVal] = useState("Next");
    const [choice1Color, setChoice1Color] = useState("black");
    const [choice2Color, setChoice2Color] = useState("black");
    const [choice3Color, setChoice3Color] = useState("black");
    const [choice4Color, setChoice4Color] = useState("black");
    var choiceCount = 0;

    const quesArr = [
        {
            questions: "3+2",
            answerChoices: [
                {choice: "1"},
                {choice: "3"},
                {choice: "7"},
                {choice: "5"},
            ],
            correctAnsChoice: "4",
        },
        {
            questions: "5+1",
            answerChoices: [
                {choice: "6"},
                {choice: "4"},
                {choice: "7"},
                {choice: "5"},
            ],
            correctAnsChoice: "1",
        },
        {
            questions: "9+0",
            answerChoices: [
                {choice: "4"},
                {choice: "1"},
                {choice: "9"},
                {choice: "3"},
            ],
            correctAnsChoice: "3",
        },
        {
            questions: "3-1",
            answerChoices: [
                {choice: "5"},
                {choice: "2"},
                {choice: "1"},
                {choice: "8"},
            ],
            correctAnsChoice: "2",
        },
        {
            questions: "4x4",
            answerChoices: [
                {choice: "10"},
                {choice: "12"},
                {choice: "16"},
                {choice: "18"},
            ],
            correctAnsChoice: "3",
        },
    ]



    const clickedchoice = (selectedChoice) => {
        if (selectedChoice === quesArr[questionCount].correctAnsChoice){
            console.log("Correct");
        }else{
            console.log("Incorrect");
        }
    }

    const prevques = () => {
        setQuestionCount(questionCount - 1);
        if (questionCount === 1){
            setPrevBtnVal(true);
        }else if (questionCount <= 4){
            setNextBtnVal("Next");
        }
    }

    const nextques = () => {
        setQuestionCount(questionCount + 1);
        if (questionCount === 0){
            setPrevBtnVal(false);
        }else if (questionCount === 1 ){
            setNextBtnVal("Next");
        }else if (questionCount === 2){
            setNextBtnVal("Next");
        }else if (questionCount === 3){
            setNextBtnVal("Finish Quiz");
        }else if (questionCount === 4){
            Navigate("/scores");
        }
    }

    const chosenchoice = (x) => {

    }

    return(
        <div className = "beginQuizCont">
            <h3>{questionCount + 1}. {quesArr[questionCount].questions}</h3>
            <ul>
                <li id = "mcqch1" style={{backgroundColor: choice1Color}} onClick={() => clickedchoice("1")}>(A) {quesArr[questionCount].answerChoices[choiceCount + 0].choice}</li>
                <li id = "mcqch2" style={{backgroundColor: {choice2Color}}} onClick={() => clickedchoice("2")}>(B) {quesArr[questionCount].answerChoices[choiceCount + 1].choice}</li>
                <li id = "mcqch3" style={{backgroundColor: {choice3Color}}} onClick={() => clickedchoice("3")}>(C) {quesArr[questionCount].answerChoices[choiceCount + 2].choice}</li>
                <li id = "mcqch4" style={{backgroundColor: {choice4Color}}} onClick={() => clickedchoice("4")}>(D) {quesArr[questionCount].answerChoices[choiceCount + 3].choice}</li>
            </ul>   
            <button disabled = {prevBtnVal} onClick={() => prevques()}>Back</button>
            <button onClick={() => nextques()}>{nextBtnVal}</button>
        </div>
    );
}
export default Quiz;