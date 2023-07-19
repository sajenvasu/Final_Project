import './App.css';
import Login from './Login';
import Home from './Home';
import Create from './Create'

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Create" element={<Create />} />
        </Routes>
        </div>
    );
}

export default App;
