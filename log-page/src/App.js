import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import {BrowserRouter as Route, Router, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>App</h1>
      <Router>
        <Routes>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Signup/>} path="/signup"/>
          <Route element={<Home/>} path="/"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
