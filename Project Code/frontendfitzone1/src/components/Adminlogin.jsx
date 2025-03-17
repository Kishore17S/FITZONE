
import React, { useState } from 'react';
import { Link, useNavigate} from "react-router-dom";
import store from './store';
import {setName} from './homereduser';

import logo2 from '../1.png'
import axios from 'axios';



const Adminlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const nav = useNavigate();

  const reTurn = () => {
    // nav("/dashboard")
  }

  const handleLogin = (e) => {
    if (!email || !password) {
      setFormError('Please fill correct email and password fields');
      return;
    }

    if (!email.includes('@') || !email.endsWith('gmail.com')) {
      setEmailError('Please enter a valid Gmail address');
      return;
    }
    if (!email.includes('kishore3558@gmail.com')) {
      setEmailError('Invalid');
      return;
    }

    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
      setPasswordError('Password must contain both letters and numbers');
      return;
    }

    setFormError('');
    setEmailError('');
    setPasswordError('');

if(email.includes('kishore3558@gmail.com')){
    axios.post('http://localhost:8080/api/v1/auth/login',{
      email:email,
      password:password
    }).then((Response)=>{
      console.log(Response.data.token);
      const token = Response.data.token;
      localStorage.setItem('token',token);
      console.log(`token from lc : ${localStorage.getItem('token')}`)
  nav("/Trainerdashboard")
    })
  };
}

  return (
    <div>
    <div className='ground'>
       <div className="container">  
       <img
          className="logo2"
          src={logo2} 
          alt=""
          srcset=""
          onClick={reTurn}              
        />
      <h2 className='mm'> Admin Login</h2>     
      <form>
      {formError && <p className="error-message">{formError}</p>}

        <input className='mail'
          type="email"
          placeholder="Email"
          // value={email}
         
            onChange={(e) => setEmail(e.target.value)}
          
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {passwordError && <p className="error-message">{passwordError}</p>}

        <button type="button" onClick={handleLogin}>   
        Login 
          {/* <Link to="/dash" className='but' >Login</Link> */}
        </button>
       
        
      </form>
    </div>
    </div>
    </div>
  );
};

export default Adminlogin;
