import './App.css';

function Login(){
    return(
    <div>
        <div id = "logintab">
            <div class="login-form">
                <h3 class="login-heading">Login</h3>
                <form class="login">
                    <input type="text" id="username" name="username" required placeholder="Username"></input>
                    <br></br>
                    <input type="password" id="password" name="password" required placeholder="Password"></input>
                    <br></br>
                    <div class="rememberme">
                        <input type="checkbox" id="remember" name="rememberme"></input>
                        <label for="rememberme">Remember Me</label>
                        <a href="">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                    
                </form>
                <h4>Or</h4>
                <button class="createbutton" onclick="createaccount()">Create an Account</button>
            </div>
            
        </div>
        <div id = "createtab">
            <div class="login-form" style="padding-bottom: 170px;">
                <h3 class="login-heading">Create Account</h3>
                <form class="login">
                    <input type="text" id="username" name="username" required placeholder="Username"></input>
                    <br></br>
                    <input type="password" id="password" name="password" required placeholder="Password"></input>
                    <br></br>
                    <input type="password" id="passwordcheck" name="passwordcheck" required placeholder="Confirm Password"></input>
                    <button type="submit">Create</button>
                </form>
                <button class="createbutton" onclick="backaccount()" style="margin-top: 20px; margin-right: 20px;">Back</button>
            </div>
        </div>
    </div>
    );
}

export default Login;