import React, { useState } from "react";
import "./Login.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from "react-router-dom";




function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const [token, setToken] = useState("");

   
    
        const handleLogin = async (e) => {
            e.preventDefault();
        
            try {
                const response = await axios.post('https://royal-nerve-lorby.up.railway.app/api/auth/login', {
                    username,
                    password
                });
                console.log('Успешная аутентификация!', response.data); 
            } catch (error) {
                console.error('Ошибка аутентификации:', error);
            }
        };

        // async function getToken() {
        //     try {
        //         const response = await axios.get('https://royal-nerve-lorby.up.railway.app/api/auth/token');
        //         const token = response.data.token;
        //         return token;
        //     } catch (error) {
        //         console.error('Ошибка при получении токена:', error);
        //         throw error;
        //     }
        // }
        
    

    return (
        <div>
             <div className='head'><h1><span>Welcome back<br></br>
                To</span> CooksCorner</h1></div>

            <form onSubmit={handleLogin} className="login-form">
                <div className="input-forms">
                        <div className="Email-form">
                        <label for="username">Email</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                placeholder="vvedy suda-tuda login"
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                        </div>
                        <div className="Password-form">
                        <label for="password">password</label>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                id="password" 
                                name="password" 
                                placeholder="enter a password"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            {/* <FontAwesomeIcon 
                        icon={showPassword ? faEye : faEyeSlash} 
                        onClick={() => setShowPassword(!showPassword)} 
                        className="password-toggle-eye"
                    />
                         */}
                        </div>
                </div>    
                <button type="submit" className="Login-button">Sign in</button>
                <div className="under">
                <p>I don't have an account? <Link to="/registration" className="signup-link">Sign Up Now</Link></p>
            </div>
            </form>
          
        </div>
    );
}

export default Login;