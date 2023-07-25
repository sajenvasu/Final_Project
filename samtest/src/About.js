import './App.css';
import { Link } from 'react-router-dom';
function About(){
    return(
    <div>
        <div class="bg"></div>
        <div class="aboutbg">
            <div id = "abouttab">
                <Link to= "/"><img src= 'https://www.freeiconspng.com/uploads/arrow-icon-28.png' alt='Arrow' class='Abarrow'/></Link>
                <p class="info">Cybersecurity, also known as information security or IT security, refers to the practice of protecting computer systems,
                 networks, programs, and data from unauthorized access, use, disclosure, disruption, modification, or destruction. 
                 It encompasses various technologies, processes, and practices that aim to safeguard digital assets and information from cyber threats and attacks.
                 <br></br><br></br>
                 The importance of cybersecurity has grown significantly with the increasing reliance on technology and the internet in both personal and professional settings. 
                 Cybersecurity measures are necessary to defend against a wide range of threats
                 </p>
                <div style={{display: 'inline-block'}}>
                    <h2 class= "what">What is<br></br> Cybersecurity?</h2>
                </div>
                <Link><p class="next">Why is it important</p></Link>
            </div>
            
        </div>
            
    </div>
    
    );
}

export default About;