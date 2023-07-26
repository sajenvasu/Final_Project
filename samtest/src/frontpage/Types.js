import '../App.css';
import './Types.css';
import { Link } from 'react-router-dom';
function Types(){
    return(
    <div>
        <div class="bg"></div>
        <div class="aboutbg">
            <div id = "importtab">
                <Link to= "/"><img src= 'https://www.freeiconspng.com/uploads/arrow-icon-28.png' alt='Arrow' class='Abarrow'/></Link>
                
                <div  class='inside'>
                    <h2 class= "what" style={{fontSize: '50px', marginLeft: '2ex', marginTop: '-1.5ex'}}>Types of Security Threats:</h2>
                    <p class="info">Cybersecurity, also known as information security or IT security, refers to the practice of protecting computer systems,
                 networks, programs, and data from unauthorized access, use, disclosure, disruption, modification, or destruction. 
                 It encompasses various technologies, processes, and practices that aim to safeguard digital assets and information from cyber threats and attacks.
                 <br></br><br></br>
                 The importance of cybersecurity has grown significantly with the increasing reliance on technology and the internet in both personal and professional settings. 
                 Cybersecurity measures are necessary to defend against a wide range of threats
                 <ul style={{marginLeft: '-50ex', marginTop: '-18ex', fontSize: '3ex'}}>
                    <li>Malware</li>
                    <li>Phishing</li>
                    <li>Hacking and Unauthorised</li>
                    <li>Distributed Denial of Service (DDoS) Attacks</li>
                    <li>Data Breaches</li>
                    <li>Insider Threats</li>
                 </ul>
                 </p>

                </div>
                <Link to="/Avoid"><p class="next" style={{marginLeft:'117ex'}}>How to avoid these threats -{'>'}</p></Link>
                    <Link to="/Importance"><p class="previous">{'<'}- Why is it important </p></Link>
            </div>            
        </div>      
    </div>
    
    );
}

export default Types;