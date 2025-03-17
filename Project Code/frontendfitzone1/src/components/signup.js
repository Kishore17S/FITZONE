// SignUp.js
import React, { useState } from 'react';
import './signup.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';



const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');


 const nav = useNavigate();




  const handleSignUp = () => {
    axios.post('http://localhost:8080/api/v1/auth/register',{
      name:name,
      email:email,
      password:password,
      role:'CUSTOMER'
    })

    if (!name || !email || !password) {
      setFormError('Please fill in all fields');
      return;
    }

    // Front-end email validation
    if (!email.includes('@') || !email.endsWith('gmail.com')) {
      setEmailError('Please enter a valid Gmail address');
      return;
    }

    // Front-end password validation
    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
      setPasswordError('Password must contain both letters and numbers');
      return;
    }

    // if(email.includes('dp123@gmail.com')){
    //   return nav('/Dashboard');
    // }


    // Clear any previous errors
    setFormError('');
    setEmailError('');
    setPasswordError('');
    
    console.log('Signing up with the following information:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role);
    
    nav("/");

 

  };

  return (
    <div className='ground'>
    <div className='container'>
      <h2 className='cl'>Sign Up</h2>
      <form>
      {formError && <p className="error-message">{formError}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
        className={`id ${emailError ? 'error' : ''}`}
        type="email"
        placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <input
        className={`id ${passwordError ? 'error' : ''}`}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
       {/*} <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
  />*/}
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
