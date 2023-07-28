import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Create(){
    const [gametag, setGameTag] = useState()
    const [password, setPassword] = useState()
    const [password2, checkPassword] = useState()
    const navigate = useNavigate()

    var text1 = "Passwords dont match"
    var text2 = "Gamertag already exists. Please pick another one"
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Create', {gametag, password})
        .then(res => {
            if(res.data === "Gamertag already exists")setDialogState(2);
            else if(res.data.Status === "Success")navigate('/Login')
        }).catch(err => console.log(err))

        if(password === password2){
            setDialogState(0);
        }
        else{
            setDialogState(1);
        }

    }

        
    const [dialogState, setDialogState] = useState(0);


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
                        <input type="password" id="passwordcheck" name="passwordcheck" required placeholder="Confirm Password" onChange={(e)=> checkPassword(e.target.value)}></input>
                        <div className={`alert-box2 ${dialogState === 1 ? 'visible' : 'hidden'}`}>{text1}</div>
                        <div className={`alert-box2 ${dialogState === 2 ? 'visible' : 'hidden'}`}>{text2}</div>
                        <button type="submit">Create</button>
                    </form>
                    <Link to="/Login"><button className="createbutton" style={{marginTop: '30px', marginRight: '16px'}}>Back</button></Link>
                </div>
            </div>
        </div>
    
    );
}

export default Create;