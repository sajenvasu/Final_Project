import '../App.css';
import './Types.css';
import { Link } from 'react-router-dom';
function Types(){
    return(
    <div>
        <div className="bg"></div>
        <div className="aboutbg">
            <div id = "importtab">
                <Link to= "/"><img src= 'https://www.freeiconspng.com/uploads/arrow-icon-28.png' alt='Arrow' className='Abarrow'/></Link>
                
                <div  className='inside'>
                    <h2 className= "what" style={{fontSize: '50px', marginLeft: '1ex', marginTop: '50px'}}>Types of Security Threats:</h2>
                    <p className="info" style={{fontSize: '20px', marginTop: '-25px'}}><b>Malware:</b> Malicious software like viruses, worms, Trojans, and ransomware that infect systems and cause harm or data loss.
                    <br></br><br></br><b>Phishing:</b> Deceptive emails, messages, or websites that trick users into revealing sensitive information like passwords or credit card details.
                    <br></br><br></br><b>Hacking and Unauthorized Access:</b> Intrusions into computer systems, networks, or accounts to gain unauthorized access or control.
                    <br></br><br></br><b>Distributed Denial of Service (DDoS) Attacks:</b> Overloading a system or website with an excessive amount of traffic, making it unavailable to legitimate users.
                    <br></br><br></br><b>Data Breaches:</b> Unauthorized access to sensitive information, often leading to its public exposure or sale on the dark web.
                    <br></br><br></br><b>Insider Threats:</b> Malicious actions taken by employees or people within an organization to compromise security.

            
            
                 <ul style={{marginLeft: '-50ex', marginTop: '-25ex', fontSize: '25px'}}>
                    <li>Malware</li>
                    <li>Phishing</li>
                    <li>Hacking and Unauthorised</li>
                    <li>Distributed Denial of Service (DDoS) Attacks</li>
                    <li>Data Breaches</li>
                    <li>Insider Threats</li>
                 </ul>
                 </p>

                </div>
                <Link to="/Avoid"><p className="next" style={{marginLeft:'117ex'}}>How to avoid these threats -{'>'}</p></Link>
                    <Link to="/Importance"><p className="previous">{'<'}- Why is it important </p></Link>
            </div>            
        </div>      
    </div>
    
    );
}

export default Types;