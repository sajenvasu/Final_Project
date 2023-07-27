import '../App.css';
import { Link } from 'react-router-dom';
function Import(){
    return(
    <div>
        <div className="bg"></div>
        <div className="aboutbg">
            <div id = "importtab">
                <Link to= "/"><img src= 'https://www.freeiconspng.com/uploads/arrow-icon-28.png' alt='Arrow' className='Abarrow'/></Link>
                <div className='inside'>
                    <p className="info" style={{marginTop:'-5ex'}}><b>Protecting Personal Information:</b> It safeguards sensitive personal and financial data from being stolen or misused, preventing identity theft and fraud.
                    <br></br><br></br>
                    <b>Securing Business Assets:</b> Cybersecurity helps protect valuable intellectual property, financial records, and trade secrets from being accessed or stolen by competitors or malicious actors.
                    <br></br><br></br>
                    <b>Ensuring Privacy:</b> It ensures that private communications and information remain confidential, maintaining trust among individuals, organizations, and governments.
                    <br></br><br></br>
                    <b>Preserving National Security:</b> Cybersecurity defends critical infrastructure, government systems, and military operations from cyber-attacks that could compromise a nation's security.
                    </p>
                    
                        <h2 className= "what" >Why is<br></br> Cybersecurity <br></br> important?</h2>
                </div>
                <Link to="/Types"><p className="next" style={{marginLeft:'117ex'}}>Types of Cybersecurity threats -{'>'}</p></Link>
                <Link to="/About"><p className="previous">{'<'}- What is Cybersecurity</p></Link>

            </div>            
        </div>
            
    </div>
    
    );
}

export default Import;