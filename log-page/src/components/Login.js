import React from "react";
import {Link} from "react-router-dom";


function Login(){

 
    function clickedlogin(){
        console.log("Clicked")
    }

    return(
        <div className="login_div">
            <h1>Login</h1>
            <form action = "POST">
                <label>Gamer ID:  
                    <input type = "text" id="gamer_TextBox" className="log_TB"/>
                </label>
                <br/>
                <label>Password:  
                    <input type = "text" id="password_TextBox" className="log_TB"/>
                </label>
                <br/>
                <input type = "Submit" onClick = {clickedlogin}/>
            </form>
             
            <div>
            <Link to = "/">Continue as Guest</Link>
            </div>
        </div>
    );
}
export default Login;