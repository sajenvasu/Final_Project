import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import './quiz-style.css';
function Quiz(){
    const location = useLocation();
    const arrValue = location.state.arr;
    console.log(arrValue);
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

    const fullquesArr = [
        {
            questions: "What should you do when receiving an email asking for your login credentials?",
            answerChoices: [
                {choice: "Reply to the email with your information"},
                {choice: "Send the email to other people as a warning"},
                {choice: "Reply back to the email with fake information to test it"},
                {choice: "Report the email and block it as spam"},
            ],
            correctAnsChoice: "4",
        },
        {
            questions: "Why is it a bad practice to use the same password for multiple applications?",
            answerChoices: [
                {choice: "If one of the applications credentials get compromised then all the other accounts are at risk"},
                {choice: "It can be easier to remember for the user"},
                {choice: "This will give the chance of forgetting the password and loosing the account"},
                {choice: "It is a common practice to have a very easy password for all of your accounts"},
            ],
            correctAnsChoice: "1",
        },
        {
            questions: "What is a computer Malware?",
            answerChoices: [
                {choice: "A hardware feature used to help with optimization"},
                {choice: "A network attack which locks the computer from the user"},
                {choice: "A software that harms and steals data from the users computers"},
                {choice: "All of the above"},
            ],
            correctAnsChoice: "3",
        },
        {
            questions: "What is Phishing?",
            answerChoices: [
                {choice: "Phishing is an online game"},
                {choice: "A message or an email that is built to steal important information of the user?"},
                {choice: "A program used to crash computers"},
                {choice: "A network attack which locks the computer from the user"},
            ],
            correctAnsChoice: "2",
        },
        {
            questions: "How will users having stronger passwords improve the overall cybersecurity?",
            answerChoices: [
                {choice: "Gives a very professional look to the hackers"},
                {choice: "They can prevent viruses from accessing control over the computer"},
                {choice: "It decreases the chances of having an account breached"},
                {choice: "Showing the attackers that longer passwords dont exactly mean harder passwords."},
            ],
            correctAnsChoice: "3",
        },
        {
            questions: "What is the general idea of cybersecurity?",
            answerChoices: [
                {choice: "A programming language that codes cybersecurity patches"},
                {choice: "Cleaning out viruses with anti-virus softwares"},
                {choice: "Making sure that the workplace is safe from workplace cyber attacks"},
                {choice: "Protecting the security of computers, networks, and data from attackers"},
            ],
            correctAnsChoice: "4",
        },
        {
            questions: "What is not a type of security threat?",
            answerChoices: [
                {choice: "Phishing"},
                {choice: "Data Breach"},
                {choice: "Weak Passwords"},
                {choice: "Malware"},
            ],
            correctAnsChoice: "3",
        },
        {
            questions: "What is the main reason of why cybersecurity is important?",
            answerChoices: [
                {choice: "because it creates a safer use of the computers on the internet"},
                {choice: "because it protects the personal and important data of individuals"},
                {choice: "because it closes vulnerabilities for attackers to enter"},
                {choice: "None of these"},
            ],
            correctAnsChoice: "2",
        },
        {
            questions: "What word best describes, safeguarding sensitive information from being stolen?",
            answerChoices: [
                {choice: "Securing Business Assets"},
                {choice: "Ensuring Privacy"},
                {choice: "Protecting Personal Information"},
                {choice: "Preserving National Security"},
            ],
            correctAnsChoice: "3",
        },
        {
            questions: "What word best describes, ensuring private communications and information to remain confidential?",
            answerChoices: [
                {choice: "Securing Business Assets"},
                {choice: "Ensuring Privacy"},
                {choice: "Protecting Personal Information"},
                {choice: "Preserving National Security"},
            ],
            correctAnsChoice: "2",
        },
        {
            questions: "What word best describes, defending the critical infrastructure and government systems?",
            answerChoices: [
                {choice: "Securing Business Assets"},
                {choice: "Ensuring Privacy"},
                {choice: "Protecting Personal Information"},
                {choice: "Preserving National Security"},
            ],
            correctAnsChoice: "4",
        },
        {
            questions: "What word best describes, protecting valuable intellect property like financial records?",
            answerChoices: [
                {choice: "Securing Business Assets"},
                {choice: "Ensuring Privacy"},
                {choice: "Protecting Personal Information"},
                {choice: "Preserving National Security"},
            ],
            correctAnsChoice: "1",
        },
        {
            questions: "What type of threat is this, Deceptive emails, messages, or websites that tricks users into sensitive information?",
            answerChoices: [
                {choice: "Malware"},
                {choice: "Phishing"},
                {choice: "Data Breaches"},
                {choice: "Insider Threats"},
            ],
            correctAnsChoice: "2",
        },
        {
            questions: "What type of threat is this, Unauthorized access to sensitive information, which often leads to public exposure?",
            answerChoices: [
                {choice: "Malware"},
                {choice: "Phishing"},
                {choice: "Data Breaches"},
                {choice: "Insider Threats"},
            ],
            correctAnsChoice: "3",
        },
        {
            questions: "What type of threat is this, Suspicious actions which occur within an organization by employees or people?",
            answerChoices: [
                {choice: "Malware"},
                {choice: "Phishing"},
                {choice: "Data Breaches"},
                {choice: "Insider Threats"},
            ],
            correctAnsChoice: "4",
        },
        {
            questions: "What type of threat is this, Dangerous programs that can infect or damage computers while breaking into data?",
            answerChoices: [
                {choice: "Malware"},
                {choice: "Phishing"},
                {choice: "Data Breaches"},
                {choice: "Insider Threats"},
            ],
            correctAnsChoice: "1",
        },
        {
            questions: "How to avoid loosing files on your system?",
            answerChoices: [
                {choice: "Keeping the OS updated"},
                {choice: "Using a VPN"},
                {choice: "Working off of a seperate system"},
                {choice: "Backing up information regularly"},
            ],
            correctAnsChoice: "4",
        },
        {
            questions: "What are ways to reduce the chance of having viruses on your system?",
            answerChoices: [
                {choice: "Keeping the OS updated"},
                {choice: "Using a VPN"},
                {choice: "Blocking suspicious links and not opening them up"},
                {choice: "All of the above"},
            ],
            correctAnsChoice: "4",
        },
        {
            questions: "What is a DDOS attack?",
            answerChoices: [
                {choice: "Infecting the system with a virus"},
                {choice: "Blocking access to a remote system"},
                {choice: "Overloading a system in the network with large amount of traffic"},
                {choice: "Messages and emails that are suspicous when clicking"},
            ],
            correctAnsChoice: "3",
        },
        {
            questions: "What is the best way to stay the safest when browsing the internet?",
            answerChoices: [
                {choice: "Using a trusted VPN service"},
                {choice: "Using a public wifi"},
                {choice: "Using a friends computer"},
                {choice: "Going to websites that have broken url links"},
            ],
            correctAnsChoice: "1",
        }
    ];

    const quesArr = [
        {
            questions: "What is the general idea of cybersecurity?",
            answerChoices: [
                {choice: "A programming language that codes cybersecurity patches"},
                {choice: "Cleaning out viruses with anti-virus softwares"},
                {choice: "Making sure that the workplace is safe from workplace cyber attacks"},
                {choice: "Protecting the security of computers, networks, and data from attackers"},
            ],
            correctAnsChoice: "4",
        },
        {
            questions: "What is not a type of security threat?",
            answerChoices: [
                {choice: "Phishing"},
                {choice: "Data Breach"},
                {choice: "Weak Passwords"},
                {choice: "Malware"},
            ],
            correctAnsChoice: "3",
        },
        {
            questions: "What is the main reason of why cybersecurity is important?",
            answerChoices: [
                {choice: "because it creates a safer use of the computers on the internet"},
                {choice: "because it protects the personal and important data of individuals"},
                {choice: "because it closes vulnerabilities for attackers to enter"},
                {choice: "None of these"},
            ],
            correctAnsChoice: "2",
        },
        {
            questions: "What word best describes, safeguarding sensitive information from being stolen?",
            answerChoices: [
                {choice: "Securing Business Assets"},
                {choice: "Ensuring Privacy"},
                {choice: "Protecting Personal Information"},
                {choice: "Preserving National Security"},
            ],
            correctAnsChoice: "3",
        },
        {
            questions: "What word best describes, ensuring private communications and information to remain confidential?",
            answerChoices: [
                {choice: "Securing Business Assets"},
                {choice: "Ensuring Privacy"},
                {choice: "Protecting Personal Information"},
                {choice: "Preserving National Security"},
            ],
            correctAnsChoice: "2",
        }
    ];

    console.log(arrValue);
    quesArr.unshift(fullquesArr[arrValue[0]]);
    quesArr.unshift(fullquesArr[arrValue[1]]);
    quesArr.unshift(fullquesArr[arrValue[2]]);
    quesArr.unshift(fullquesArr[arrValue[3]]);
    quesArr.unshift(fullquesArr[arrValue[4]]);
    console.log(quesArr);
    quesArr.pop();
    quesArr.pop();
    quesArr.pop();
    quesArr.pop();
    quesArr.pop();

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
                // alert("PLEASE CHECK");
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
                <Link to= "/beginquiz"><button id="beginquizbutton">Retry</button></Link>
                <Link to= "/Games"><button id="beginquizbutton">Games</button></Link>
                </div>
              )
            }
        </div>
    );
}
export default Quiz;