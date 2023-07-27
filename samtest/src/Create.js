import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Create(){
    const [gametag, setGameTag] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Create', {gametag, password})
        .then(res => {
            navigate('/Login')
        }).catch(err => console.log(err))
    }
    return(
        
        <div style={{overflowY: 'hidden'}}>
            <div className="bg"></div>
            <div id = "createtab">
                <div className="login-form" style={{paddingBottom: '210px'}}>
                    <h3 className="login-heading">Create Account</h3>
                    <form className="login"onSubmit={handleSubmit}>
                        <input type="text" id="gametag" name="gametag" required placeholder="Gamertag" onChange={(e) => setGameTag(e.target.value)}></input>
                        <br></br>
                        <input type="password" id="password" name="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        <br></br>
                        <input type="password" id="passwordcheck" name="passwordcheck" required placeholder="Confirm Password"></input>
                        <button type="submit">Create</button>
                    </form>
                    <Link to="/Login"><button className="createbutton" style={{marginTop: '30px', marginRight: '16px'}}>Back</button></Link>
                </div>
            </div>
        </div>
    
    );
}

export default Create;