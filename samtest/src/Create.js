import { Link } from 'react-router-dom';
import './App.css';

function Login(){
    return(

        <div style={{overflowY: 'hidden'}}>
            <div class="bg"></div>
            <div id = "createtab">
                <div class="login-form" style={{paddingBottom: '210px'}}>
                    <h3 class="login-heading">Create Account</h3>
                    <form class="login">
                        <input type="text" id="username" name="username" required placeholder="Username"></input>
                        <br></br>
                        <input type="password" id="password" name="password" required placeholder="Password"></input>
                        <br></br>
                        <input type="password" id="passwordcheck" name="passwordcheck" required placeholder="Confirm Password"></input>
                        <button type="submit">Create</button>
                    </form>
                    <Link to="/Login"><button class="createbutton" style={{marginTop: '30px', marginRight: '16px'}}>Back</button></Link>
                </div>
            </div>
        </div>
    
    );
}

export default Login;