import '../App.css';
import { Link } from 'react-router-dom';
function About(){
    return(
    <div>
        <div className="bg"></div>
        <div className="aboutbg">
            <div id = "abouttab">
            
                <Link to= "/"><img src= 'https://www.freeiconspng.com/uploads/arrow-icon-28.png' alt='Arrow' className='Abarrow'/></Link>
                <div className='inside'>
                <p className="info">Cybersecurity, also known as information security or IT security, refers to the practice of protecting computer systems,
                 networks, programs, and data from unauthorized access, use, disclosure, disruption, modification, or destruction. 
                 It encompasses various technologies, processes, and practices that aim to safeguard digital assets and information from cyber threats and attacks.
                 <br></br><br></br>
                 The importance of cybersecurity has grown significantly with the increasing reliance on technology and the internet in both personal and professional settings. 
                 Cybersecurity measures are necessary to defend against a wide range of threats
                 </p>
                
                    <h2 className= "what">What is<br></br> Cybersecurity?</h2>
                </div>
                <Link to="/Importance"><p className="next">Why is it important -{'>'}</p></Link>
            </div>            
        </div>
            
    </div>
    
    );
}

export default About;