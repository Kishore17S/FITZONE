import React from 'react';
// import './home.css'; 
import "./Styles/home.css";
import store from './store';
import { Link, useNavigate } from 'react-router-dom';
import logo1 from '../1.png'



const Home = () => {
  const name = store.getState().name.name;
  console.log(name)
  
  const nav = useNavigate()
  const Join = () => {
    nav("/workout")
  }
  // const Challenge = () => {
  //   nav("/workout")
  // }

  return (
    <div className='home1_aa'>
      <div className="home1_dashboard">
        <nav className="home1_navbar">
        <img
                className="logo1"
                src={logo1} 
                alt=""
                srcset=""
              />
          <h1 style={{marginLeft:'-420px'}}>FIT ZONE</h1>
          <ul>
          <Link style={{textDecoration:'none',color:'white'}} to="/home"><li>Home</li></Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/about"><li>About Us</li></Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/Userprofile"><li>Profile</li></Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/"><li>Logout</li></Link>
          
          {/* <Link style={{textDecoration:'none',color:'white'}} to="/workout"><li>Workout</li></Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/UserDataForm"><li>User Data</li></Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/Dashboard"><li>Dashboard</li></Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/Adminlogin"><li>AdminLogin</li></Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/contact"><li>FeedBack</li></Link>
                   {/*<Link style={{textDecoration:'none'}} to="/Dash"><li className='daash'>Dashboard</li></Link>
            {/* <Link style={{textDecoration:'none',color:'white'}} to="/Neatboard"><li>Neatboard</li></Link>
  {/*<Link style={{textDecoration:'none',color:'white'}} to="/UserDataForm"><li>UserDataForm</li></Link>
           {/*<Link style={{textDecoration:'none',color:'white'}} to="/"><li>Logout</li></Link>
            {/* <li className='redu'>{name}</li> */}
          </ul>
        </nav> 

        <div className='textbox'>
          <h5 className='home1_jj'>JUST ONE MORE,</h5>
          <h3 className='home1_oo'>ONE MORE SET.</h3>

          <button className='home1_button1' onClick={Join}>Start Now</button>
          

          <div className='home1_footer'>
          <div className='home1_footer_privacy'>
          <ul style={{listStyle:"none"}}>
          <Link style={{textDecoration:'none', color:'white',position:'absolute'}} to="/privacy"><li style={{marginLeft:'230px'}}>Privacy Policy</li></Link>
          <Link style={{textDecoration:'none', color:'white'}} to="/Helpandsupport"><li style={{marginLeft:'400px'}}>Help & Support</li></Link>
          <Link style={{textDecoration:'none', color:'white'}} to="/Challenge"><li style={{marginLeft:'-150px',marginTop:'-23px'}}>Challenge</li></Link>
          <Link style={{textDecoration:'none', color:'white'}} to="/term"><li style={{marginLeft:'-40px',marginTop:'-23px'}}>Terms and Conditions</li></Link>
          
          </ul>
          </div>
          </div>
          </div>   
          
          </div>
          </div>
          // <Link style={{textDecoration:'none',color:'white',position:'absolute'}} to="/term"><li>Terms and Conditions</li></Link>
          
  );
};

export default Home;
