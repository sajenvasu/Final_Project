import React from 'react';
import Login from './Login';
import Home from './Home';
import Create from './Create'

import { Routes, Route } from 'react-router-dom';
import Game1Home from './game1/game1home';
import Start from './game1/start';
import Checker from './game1/pwd-checker';

import Game2Start from './game2/game2start';
import Game2Home from './game2/game2home';
import Email1 from './game2/email1';
import Email2 from './game2/email2';
import Email3 from './game2/email3';

function App() {
    return (
        <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Create" element={<Create />} />

            <Route path="/start" element={<Start />} />
        <Route path="/game1home" element={<Game1Home />} />
        <Route path="/pwd-checker" element={<Checker />} />

        <Route path="/game2start" element={<Game2Start />} />
        <Route path="/game2home" element={<Game2Home />} />
        <Route path="/email1" element={<Email1 />} />
        <Route path="/email2" element={<Email2 />} />
        <Route path="/email3" element={<Email3 />} />

        </Routes>

        
        </div>
    );
}

export default App;
