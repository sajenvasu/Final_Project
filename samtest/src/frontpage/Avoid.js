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
                    <h2 className= "what" style={{fontSize: '50px', marginLeft: '1px', top: '10%'}}>How to Avoid these Threats:</h2>
                    <p className="info" style={{fontSize: '20px', marginTop: '-25px'}}><b>Use Strong Passwords:</b> Create unique and complex passwords for each account and enable multi-factor authentication.
                    <br></br><br></br><b>Keep Software Updated:</b> Regularly update operating systems, applications, and antivirus software to patch security vulnerabilities.
                    <br></br><br></br><b>Be Cautious with Email:</b> Avoid clicking on suspicious links or downloading attachments from unknown sources.
                    <br></br><br></br><b>Use Secure Networks:</b> Avoid using public Wi-Fi for sensitive tasks, and opt for encrypted connections (e.g., VPN) when accessing the internet.
                    <br></br><br></br><b>Backup Data Regularly:</b> Keep backups of important files on separate devices or cloud storage to prevent data loss in case of an attack.
                    <br></br><br></br><b>Train Employees and Users:</b> Educate employees and users about cybersecurity best practices, such as recognizing phishing attempts.

                 <ul style={{marginLeft: '-40ex', marginTop: '-25ex', fontSize: '30px'}}>
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
                <Link to="/Types"><p className="previous" style={{left: '10%'}}>{'<'}- Types of Cybersecurity threats </p></Link>
            </div>            
        </div>      
    </div>
    
    );
}

export default Avoid;