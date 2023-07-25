import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
        <div class="part1">
            <div class="bg"></div>
            <div class="bgstar">
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            
            <h1>CYBERSECURITY <br></br> GAMES </h1>
            <div class="menu">
                <Link to= "/About"><button class="headin"><h2 class="headings">About</h2></button></Link>
                <Link to= "/Login"><button class="headin"><h2 class="headings">Login</h2></button></Link>
                <Link to= "/Games"><button class="headin"><h2 class="headings">Games</h2></button></Link>
            </div>
    
            <div class="developed">Developed by Sameeksha Abhijit Nair, Sajen Vasuthevan and Jasnoor Mallhi</div>
        </div>
      </div>
  );
}

export default Home;
