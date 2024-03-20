
import "./RegistrationForm.css";
import React, { useState } from "react";
import axios from 'axios';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Registration() {
    const [validPassword, setValidPassword] = useState(true);
    const [validNumber, setValidNumber] = useState(true);
    const [validSpecialChar, setValidSpecialChar] = useState(true);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setValidPassword(newPassword.length >= 8);
        setValidNumber(/\d/.test(newPassword));
        setValidSpecialChar(/[!@#$%^&*]/.test(newPassword));
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('https://royal-nerve-lorby.up.railway.app/api/auth/register', {
                email,
                username,
                password,
                confirmPassword
            });
            console.log('Успешная регистрация!', response.data);

        } catch (error) {
            console.error('Ошибка регистрации:', error);
          
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleRegistration}>
                <div>
                    <input 
                        placeholder="Введите адрес почты:"
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        placeholder="Придумайте логин"
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>


                <div>
                    <input 
                        placeholder="Создайте новый пароль"
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={handlePasswordChange}
                        className={`input-password ${validPassword ? 'password-input valid-password' : 'password-input invalid-password'}` }  
                        
                      
                     

                        />
                        
                          <FontAwesomeIcon 
                        icon={showPassword ? faEye : faEyeSlash} 
                        onClick={() => setShowPassword(!showPassword)} 
                        className="password-toggle-eyeofpas"/>
                    <ul>
                        <li className={validPassword ? 'valid' : 'invalid'}><p>Minimum 8 characters long</p></li>
                        <li className={validNumber ? 'valid' : 'invalid'}><p>At least 1 number</p></li>
                        <li className={validSpecialChar ? 'valid' : 'invalid'}><p>At least 1 special character (e.g., *, &amp;, %)</p></li>
                    </ul>
                </div>
                <div className="ofToggle">
                    <input 
                       
                        
                        placeholder="Подтвердите пароль"
                        type={showConfirmPassword ? "text" : "password"} 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
            

                        
                    />
                    <FontAwesomeIcon 
                        icon={showConfirmPassword ? faEye : faEyeSlash} 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                        className="password-toggle-eyeofconf"/>
                  
                </div>
                <button type="submit">Зарегистрироваться</button>
            </form>
            <p>Уже зарегистрированы? <a href="/">Авторизация</a></p>
        </div>
    );
}

export default Registration;
