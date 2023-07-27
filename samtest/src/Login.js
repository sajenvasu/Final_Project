import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import './App.css';

function Login(){
    const [gametag, setGameTag] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Login', {gametag, password})
        .then(res => {
            console.log("login: " + res.data);
            if(res.data.Status === "Success") {
                    navigate('/')
            }
        }).catch(err => console.log(err))
    }
    return(
    <div>
        <div className="bg"></div>
        <div id = "logintab">
            <div className="login-form">
                <h3 className="login-heading">Login</h3>
                <form className="login" onSubmit={handleSubmit}>
                    <input type="text" id="gametag" name="gametag" required placeholder="Gamertag" onChange={(e) => setGameTag(e.target.value)}></input>
                    <br></br>
                    <input type="password" id="password" name="password" required placeholder="Password"  onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>
                    <div className="rememberme" style={{marginLeft: '10px', paddingLeft: '70px'}}>
                        <input type="checkbox" id="remember" name="rememberme"></input>
                        <label for="rememberme" style={{padding: '10px'}}>Remember Me</label>
                        
                    </div>
                    <label for="forgotpass" style={{paddingLeft: '12px'}}><br></br>Forgot Password?</label>
                    <button type="submit">Login</button>
                    
                </form>
                <h4>Or</h4>
                <Link to= "/Create"><button className="createbutton">Create an Account</button></Link>
                <br></br>
                <Link to= "/"><p style={{marginTop: '20px'}}>Back to Home</p></Link>
            </div>
            
        </div>
    </div>
    
    );
}

export default Login;