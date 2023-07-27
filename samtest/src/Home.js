import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
        <div className="part1">
            <div className="bg"></div>
            <div className="bgstar">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            
            <h1>CYBERSECURITY <br></br> GAMES </h1>
            <div className="menu">
                <Link to= "/About"><button className="headin"><h2 className="headings">About</h2></button></Link>
                <Link to= "/Login"><button className="headin"><h2 className="headings">Login</h2></button></Link>
                <Link to= "/Games"><button className="headin"><h2 className="headings">Games</h2></button></Link>
                <Link to= "/beginquiz"><button className="headin"><h2 className="headings">Start Quiz</h2></button></Link>
                <Link to= "/quiz"><button className="headin"><h2 className="headings">Quiz</h2></button></Link>
                <Link to= "/scores"><button className="headin"><h2 className="headings">Score</h2></button></Link>
            </div>
    
            <div className="developed">Developed by Sameeksha Abhijit Nair, Sajen Vasuthevan and Jasnoor Mallhi</div>
        </div>
      </div>
  );
}

export default Home;
