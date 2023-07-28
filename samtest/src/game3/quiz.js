import React, { useEffect, useState } from 'react';
import './quiz-style.css';
function Quiz(){

    const [questionCount, setQuestionCount] = useState(0);
    const [correctAnsOption, setCorrectAnsOption] = useState(0);
    const [choiceColor, setChoiceColor] = useState();

    const quesArr = [
        {
            questions: "3+2",
            answerChoices: [
                {choice: "1"},
                {choice: "3"},
                {choice: "7"},
                {choice: "5"},
            ],
            correctAnsChoice: "4"
        },

    ]



    const clickedchoice = (selectedChoice) => {
        setCorrectAnsOption(quesArr[questionCount].correctAnsChoice);
        if (selectedChoice == correctAnsOption){
            console.log("Correct");
        }else{
            console.log("Incorrect");
        }
    }


    return(
        <div className = "beginQuizCont">
            <h3>{quesArr[questionCount].questions}</h3>
            <ul>
                <li id = "mcqch1" onClick={() => clickedchoice("1")}>(A) {quesArr[questionCount].answerChoices[questionCount].choice}</li>
                <li id = "mcqch2" onClick={() => clickedchoice("2")}>(B) {quesArr[questionCount].answerChoices[questionCount + 1].choice}</li>
                <li id = "mcqch3" onClick={() => clickedchoice("3")}>(C) {quesArr[questionCount].answerChoices[questionCount + 2].choice}</li>
                <li id = "mcqch4" onClick={() => clickedchoice("4")}>(D) {quesArr[questionCount].answerChoices[questionCount + 3].choice}</li>
            </ul>   
            <button>Previous Question</button>
            <button>Next Question</button>
        </div>
    );
}
export default Quiz;