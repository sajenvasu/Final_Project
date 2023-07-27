import '../App.css';
import './Types.css';
import { Link } from 'react-router-dom';
function Avoid(){
    return(
    <div>
        <div className="bg"></div>
        <div className="aboutbg">
            <div id = "importtab">
                <Link to= "/"><img src= 'https://www.freeiconspng.com/uploads/arrow-icon-28.png' alt='Arrow' className='Abarrow'/></Link>
                
                <div  className='inside'>
                    <h2 className= "what" style={{fontSize: '50px', marginLeft: '2ex', marginTop: '-1.5ex'}}>How to Avoid these Threats:</h2>
                    <p className="info">Cybersecurity, also known as information security or IT security, refers to the practice of protecting computer systems,
                 networks, programs, and data from unauthorized access, use, disclosure, disruption, modification, or destruction. 
                 It encompasses various technologies, processes, and practices that aim to safeguard digital assets and information from cyber threats and attacks.
                 <br></br><br></br>
                 The importance of cybersecurity has grown significantly with the increasing reliance on technology and the internet in both personal and professional settings. 
                 Cybersecurity measures are necessary to defend against a wide range of threats
                 <ul style={{marginLeft: '-50ex', marginTop: '-18ex', fontSize: '3ex'}}>
                 <li>Use Strong Passwords</li>
                    <li>Keep Software Updated</li>
                    <li>Be Cautious with Email</li>
                    <li>Use Secure Networks</li>
                    <li>Backup Data Regularly</li>
                    <li>Train Employees and Users</li>  
                 </ul>
                 </p>

                </div>
                <Link to="/Links"><p className="next" style={{marginLeft:'135ex'}}>Some Links -{'>'}</p></Link>
                <Link to="/Types"><p className="previous" style={{marginRight: '123ex'}}>{'<'}- Types of Cybersecurity threats </p></Link>
            </div>            
        </div>      
    </div>
    
    );
}

export default Avoid;