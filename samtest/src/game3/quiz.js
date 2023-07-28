import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './quiz-style.css';
function Quiz(){
    const [questionCount, setQuestionCount] = useState(0);
    const [lockprevBtnVal, setlockPrevBtnVal] = useState(true);
    const [locknextBtnVal, setlockNextBtnVal] = useState(false);
    const [nextBtnVal, setNextBtnVal] = useState("Next");
    const [choice1Color, setChoice1Color] = useState("black");
    const [choice2Color, setChoice2Color] = useState("black");
    const [choice3Color, setChoice3Color] = useState("black");
    const [choice4Color, setChoice4Color] = useState("black");
    const [finishedAns, setFinishedAns] = useState("");
    const [userAnsweredChoice] = useState(["-1","-1","-1","-1","-1"]);
    const [correctAns, setCorrectAns] = useState(0);
    const [quizcont, setQuizCont] = useState(true);
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
        }
    ];

    const clickedchoice = (selectedChoice) => {
        userAnsweredChoice[questionCount] = selectedChoice;

        if (questionCount === 4 && userAnsweredChoice[questionCount] > -1){
            setlockNextBtnVal(false);
        }
        switch(selectedChoice){
            case "1":{ setChoice1Color("blueviolet"); setChoice2Color("black"); setChoice3Color("black"); setChoice4Color("black");break;}
            case "2":{ setChoice1Color("black"); setChoice2Color("blueviolet"); setChoice3Color("black"); setChoice4Color("black");break;}
            case "3":{ setChoice1Color("black"); setChoice2Color("black"); setChoice3Color("blueviolet"); setChoice4Color("black");break;}
            case "4":{ setChoice1Color("black"); setChoice2Color("black"); setChoice3Color("black"); setChoice4Color("blueviolet");break;}
            default:break;
        }

        if (selectedChoice === quesArr[questionCount].correctAnsChoice){
            console.log("Correct Answer");
            setCorrectAns(correctAns + 1);
        }else{
            console.log("Wrong Answer");
        }
     
    }

    const prevques = () => {
        setFinishedAns("");
        setQuestionCount(questionCount - 1);
        if (questionCount === 1){
            setlockPrevBtnVal(true);
        }else if (questionCount <= 4){
            setNextBtnVal("Next");
            setlockNextBtnVal(false);
        }
        
        if (userAnsweredChoice[questionCount - 1] === "-1"){
            choicesDefault(0);
        }else if (userAnsweredChoice[questionCount - 1] === "1"){
            choicesDefault(1);
        }else if (userAnsweredChoice[questionCount - 1] === "2"){
            choicesDefault(2);
        }else if (userAnsweredChoice[questionCount - 1] === "3"){
            choicesDefault(3);
        }else if (userAnsweredChoice[questionCount - 1] === "4"){
            choicesDefault(4);
        }
    }

    const Nextques = () => {
        setQuestionCount(questionCount + 1);
        if (questionCount === 0){
            setlockPrevBtnVal(false);
        }else if (questionCount === 1 ){
            setNextBtnVal("Next");
        }else if (questionCount === 2){
            setNextBtnVal("Next");
        }else if (questionCount === 3){
            setNextBtnVal("Finish Quiz");
        }else if (questionCount === 4){
            console.log(userAnsweredChoice);
            if (userAnsweredChoice.includes("-1")){
                setFinishedAns("Please check if all questions are answered!");
                setQuestionCount(questionCount);
                return null
            }else{
                console.log(correctAns);
                setQuizCont(false);
            }
        }

        if (userAnsweredChoice[questionCount + 1] === "-1"){
            choicesDefault(0);
        }else if (userAnsweredChoice[questionCount + 1] === "1"){
            choicesDefault(1);
        }else if (userAnsweredChoice[questionCount + 1] === "2"){
            choicesDefault(2);
        }else if (userAnsweredChoice[questionCount + 1] === "3"){
            choicesDefault(3);
        }else if (userAnsweredChoice[questionCount + 1] === "4"){
            choicesDefault(4);
        }
    }

    const choicesDefault = (option) => {
        if (option === 0){
            setChoice1Color("black");
            setChoice2Color("black");
            setChoice3Color("black");
            setChoice4Color("black");
        }else if (option === 1){
            setChoice1Color("blueviolet");
            setChoice2Color("black");
            setChoice3Color("black");
            setChoice4Color("black");
        }else if (option === 2){
            setChoice1Color("black");
            setChoice2Color("blueviolet");
            setChoice3Color("black");
            setChoice4Color("black");
        }else if (option === 3){
            setChoice1Color("black");
            setChoice2Color("black");
            setChoice3Color("blueviolet");
            setChoice4Color("black");
        }else if (option === 4){
            setChoice1Color("black");
            setChoice2Color("black");
            setChoice3Color("black");
            setChoice4Color("blueviolet");
        }
    }

    return(
        <div className = "beginQuizCont">
            {quizcont ? ( 
                <div className='ContainerQuiz'>
                <h3>{questionCount + 1}. {quesArr[questionCount].questions}</h3>
                <ul>
                    <li id = "mcqch1" style={{backgroundColor: choice1Color}} onClick={() => clickedchoice("1")}>(A) {quesArr[questionCount].answerChoices[choiceCount + 0].choice}</li>
                    <li id = "mcqch2" style={{backgroundColor: choice2Color}} onClick={() => clickedchoice("2")}>(B) {quesArr[questionCount].answerChoices[choiceCount + 1].choice}</li>
                    <li id = "mcqch3" style={{backgroundColor: choice3Color}} onClick={() => clickedchoice("3")}>(C) {quesArr[questionCount].answerChoices[choiceCount + 2].choice}</li>
                    <li id = "mcqch4" style={{backgroundColor: choice4Color}} onClick={() => clickedchoice("4")}>(D) {quesArr[questionCount].answerChoices[choiceCount + 3].choice}</li>
                </ul>
                <button className = "navBTN" disabled = {lockprevBtnVal} onClick={() => prevques()}>Back</button>
                <button className = "navBTN" disabled = {locknextBtnVal} onClick={() => Nextques()}>{nextBtnVal}</button>
                <h6>{finishedAns}</h6>
                </div>
            ):(
                <div className = "ContainerScore">
                <h3>Results</h3>
                <h5>You got {correctAns} out of 5 correct.</h5>
                <h5>{(correctAns/5)*(100)}%</h5>
                <Link to= "/beginquiz"><button id="beginquizbutton">Retry Quiz</button></Link>
                <Link to= "/Games"><button id="beginquizbutton">Games</button></Link>
                </div>
              )
            }
        </div>
    );
}
export default Quiz;