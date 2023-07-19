import './App.css';

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Games from './Games';

function Home() {

    const reference = useRef(null);

    const scrolltoGames = () => {
        reference.current?.scrollIntoView({behavior: 'smooth'});
    };


  return (
        <div class="part1">
            <div class="bg"></div>
            <div class="bgstar">
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            
            <h1>CYBERSECURITY <br></br> GAMES </h1>
            <div class="menu">
                <Link to= "/"><button class="headin"><h2 class="headings">About</h2></button></Link>
                <Link to= "/Login"><button class="headin"><h2 class="headings">Login</h2></button></Link>
                <button class="headin" onclick={scrolltoGames()}><h2 class="headings">Games</h2></button>  
            </div>
    
            <div class="developed">Developed by Sameeksha Abhijit Nair, Sajen Vasuthevan and Jasnoor Mallhi</div>
        </div>
        <Games ref={reference}/>
      </div>
  );
}

export default Home;
