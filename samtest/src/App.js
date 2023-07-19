import React from 'react';
import Login from './Login';
import Home from './Home';
import Create from './Create'

import { Routes, Route } from 'react-router-dom';
import Game1Home from './game1/game1home';
import Start from './game1/start';
import Checker from './game1/pwd-checker';


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
        </Routes>
        </div>
    );
}

export default App;
