import '../App.css';
import './Types.css';
import { Link } from 'react-router-dom';
function Links(){
    return(
    <div>
        <div class="bg"></div>
        <div class="aboutbg">
            <div id = "importtab">
                <Link to= "/"><img src= 'https://www.freeiconspng.com/uploads/arrow-icon-28.png' alt='Arrow' class='Abarrow'/></Link>
                
                <div  class='inside'>
                    <h2 class= "what" style={{fontSize: '75px', marginLeft: '10ex', marginTop: '-1.5ex'}}>Some useful links</h2>
                </div>
                <a href='https://www.cisco.com/c/en/us/products/security/common-cyberattacks.html' className='researchLinks' target='_blank' rel="noreferrer" style={{marginTop: '6ex'}}>Common Cyberattacks- Cisco</a>
                <a href='https://onlinedegrees.sandiego.edu/top-cyber-security-threats/' className='researchLinks' target='_blank' rel="noreferrer">Top Cybersecurity Threats</a>
                <Link to="/Games"><button className='StartButton'>Start</button></Link>
                <Link to="/Avoid"><p class="previous" style={{marginTop: '10ex', marginRight: '125ex'}}>{'<'}- How to avoid these threats </p></Link>
            </div>            
        </div>      
    </div>
    
    );
}

export default Links;