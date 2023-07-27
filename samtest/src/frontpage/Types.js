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
                    <h2 className= "what" style={{fontSize: '50px', marginLeft: '2ex', marginTop: '-1.5ex'}}>Types of Security Threats:</h2>
                    <p className="info">Malware: Malicious software like viruses, worms, Trojans, and ransomware that infect systems and cause harm or data loss.
                    <br></br><br></br>Phishing: Deceptive emails, messages, or websites that trick users into revealing sensitive information like passwords or credit card details.
                    <br></br><br></br>Hacking and Unauthorized Access: Intrusions into computer systems, networks, or accounts to gain unauthorized access or control.
                    <br></br><br></br>Distributed Denial of Service (DDoS) Attacks: Overloading a system or website with an excessive amount of traffic, making it unavailable to legitimate users.
                    <br></br><br></br>Data Breaches: Unauthorized access to sensitive information, often leading to its public exposure or sale on the dark web.
                    <br></br><br></br>Insider Threats: Malicious actions taken by employees or people within an organization to compromise security.

            
            
                 <ul style={{marginLeft: '-50ex', marginTop: '-38ex', fontSize: '3ex'}}>
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