// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import {setName} from './homereduser';
// import Fitnesslogo from './Fitnesslogo.png'; 
import './login.css'; 
import homereduser from './homereduser';
import logo2 from '../1.png'
import axios from 'axios';
// import SideNavBar from '../Dashboard/SideNavBar';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const nav = useNavigate();

  const reTurn = () => {
    // nav("/")
  }

  const handleLogin = (e) => {
     // Check if any field is empty
     if (!email || !password) {
      setFormError('Please fill correct email and password fields');
      return;
    }

    // Front-end email validation
    if (!email.includes('@') || !email.endsWith('gmail.com')) {
      setEmailError('Please enter a valid Gmail address');
      return;
    }

    // if (email.includes('kishore3558@gmail.com')) {
    //   setEmailError('Invalid');
    //   return;
    // }

    // Front-end password validation
    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
      setPasswordError('Password must contain both letters and numbers');
      return;
    }

    // Clear any previous errors
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
    }

    if(!email.includes('kishore3558@gmail.com')){
    axios.post('http://localhost:8080/api/v1/auth/login',{
      email:email,
      password:password
    }).then((Response)=>{
      console.log(Response.data.token);
      const token = Response.data.token;
      localStorage.setItem('token',token);
      console.log(`token from lc : ${localStorage.getItem('token')}`)
      nav("/UserDataForm")
    })
  }

      // e.preventDefault()
      // if(email.trim() && password.trim()){
      //   toast.success('🦄 Login Successfully!', {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "colored",
      //   });
      //   // console.log('Logging in with email:', email, 'and password:', password);
      // }else{
      //   if(! email.trim() && ! password.trim()){
         
      //     toast.error(`😏 Email and Password Field's Empty!`, {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "colored",
      //       });
      // }else if(!email.trim()){
        
      //       toast.error('😏 Email field Empty!!', {
      //         position: "top-right",
      //         autoClose: 5000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //         theme: "colored",
      //         });
      //   }else if(!password.trim()){
           
      //       toast.error('😏 Password field Empty!', {
      //         position: "top-right",
      //         autoClose: 5000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //         theme: "colored",
      //         });
        // }
      // }
  };

  return (<div>
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
      <h2 className='mm'>Login</h2>     
      <form>
      {formError && <p className="error-message">{formError}</p>}
        <input className='mail'
        // className={`id ${emailError ? 'error' : ''}`}
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value)
            store.dispatch(setName(e.target.value))
          }}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <input
        className={`id ${passwordError ? 'error' : ''}`}
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
        <h5>Don't have an account?<Link to="/signup">Sign up</Link></h5>
        {/*<h5>Only for Admin<Link to="/Adminlogin">AdminLogin</Link></h5>*/}
        
      </form>
    </div>
    </div>
  
    </div>
    {/*<ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
        />*/}
    
    </div>
    
   
  );
};

export default Login;
