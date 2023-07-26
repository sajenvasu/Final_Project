import './App.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

function Create(){

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const submittedAccount = (e) => {
        console.log("HERE");
        // if (pass1 === pass2){
        //     console.log("Matched");
        // }
        // else{
        //     console.log("NO");
        // }
        axios.post("http://localhost:3001/loginregister", {gamerID, pass1})
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
    
    const[gamerID, setgamerID] = useState();
    const[pass1, setpass1] = useState();
    const[pass2, setpass2] = useState();

    return(

        <div className="createBG">
            <h3>Create Account</h3>
            <form className="crtAct" onSubmit={submittedAccount}>
                <div className = "elmente">
                    <label>Enter GamerID:</label>
                    <input type = "text" name = "GamerID" autoComplete="off" onChange={(e) => setgamerID(e.target.value)}/>
                    <br/>
                    <label>Enter Password:</label>
                    <input type = "password" name = "password1" onChange={(e) => setpass1(e.target.value)}/>
                    <br/>
                    <label>Re-enter Password:</label>
                    <input type = "password" name = "password2" onChange={(e) => setpass2(e.target.value)}/>
                </div>
                <button type = "submit">Register Account!</button>
            </form>
            <br/>
            <Link to="/Login"><button>Login</button></Link>
            <Link to="/Games"><button>Continue as Guest</button></Link>
        </div>

        // <div style={{overflowY: 'hidden'}}>
        //     <div class="bg"></div>
        //     <div id = "createtab">
        //         <div class="login-form" style={{paddingBottom: '210px'}}>
        //             <h3 class="login-heading">Create Account</h3>
        //             <form class="login">
        //                 <input type="text" id="username" name="username" required placeholder="Username"></input>
        //                 <br></br>
        //                 <input type="password" id="password" name="password" required placeholder="Password"></input>
        //                 <br></br>
        //                 <input type="password" id="passwordcheck" name="passwordcheck" required placeholder="Confirm Password"></input>
        //                 <button type="submit">Create</button>
        //             </form>
        //             <Link to="/Login"><button class="createbutton" style={{marginTop: '30px', marginRight: '16px'}}>Back</button></Link>
        //         </div>
        //     </div>
        // </div>
    
    );
}

export default Create;