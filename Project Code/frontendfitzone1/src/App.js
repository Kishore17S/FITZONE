import React from 'react';
import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
// import SideNavBar from './Dashboard/SideNavBar';
import feedback from './components/feedback';
import About from './components/About';
import workout from './components/workout';
import privacy from './components/privacy';
import terms from './components/terms';
import Neatboard from './components/Neatboard';
import video from './components/video';
// import Dash from './components/Dash';
// import Userprofile from './components/userprofile';
import Trainer from './components/Trainer';
import Settings from './components/Settings';
import UserDataForm from './components/UserDataForm';
import Shoulder from './components/Shoulder.js';
import Strength from './components/Strength.js';
import Cardio from './components/Cardio.js';
import Chestworkout from './components/chestworkout';
import Dashboard from './components/Admindashboard/Dashboard.js';
import Trainerdashboard from './components/Admindashboard/Trainerdashboard.js';
import Userlist from './components/Admindashboard/Userlist.js';
import Userprofile from './components/Userdashboard/userprofile.js';
import Addtrainerdashboard from './components/Admindashboard/Addtrainerdashboard';
import Processtracker from './components/Processtracker';
import Userprogress from './components/Userdashboard/Userprogress.js';
import Helpandsupport from './components/helpandsupport';
import Userfeedback from './components/Admindashboard/Userfeedback';
import Adminlogin from './components/Adminlogin';
import Exercisedashboard from './components/Admindashboard/Exercisedashboard';
import Userqueries from './components/Admindashboard/Userqueries.js';
import Challenge from './components/Challenge.js';
import Updatetrainerdashboard from './components/Admindashboard/Updatetrainerdashboard.js';
// import Adminlogin from './components/Adminlogin.jsx';




function App() {
  return ( 
  //  <Processtracker />
   <BrowserRouter>
   <Routes>
   <Route path='/' Component={Login} />
   <Route path='/signup' Component={SignUp} />
   <Route exact path='/UserDataForm' Component={UserDataForm} />
      <Route path='/home' Component={Home} />
      <Route path='/workout' Component={workout} />
      <Route path='/feedback' Component={feedback} />
    <Route path='/about' Component={About} />
    <Route path='/workout' Component={workout} />
    <Route path='/privacy' Component={privacy} />
    <Route path='/term' Component={terms} />
    <Route path='/video' Component={video} />
    <Route exact path='/Chestworkout' Component={Chestworkout} />
    <Route exact path='/Shoulder' Component={Shoulder} />
    <Route exact path='/Strength' Component={Strength} />
    <Route exact path='/Cardio' Component={Cardio} />
    <Route exact path='/Dashboard' Component={Dashboard} />
    <Route exact path='/Userlist' Component={Userlist} />
    <Route exact path='/Trainerdashboard' Component={Trainerdashboard} />
    <Route exact path='/Userprofile' Component={Userprofile} />
    <Route exact path='/Addtrainerdashboard' Component={Addtrainerdashboard} />
    <Route exact path='/Updatetrainerdashboard' Component={Updatetrainerdashboard} />
    <Route exact path='/Processtracker' Component={Processtracker} />
    <Route exact path='/Userprogress' Component={Userprogress} />
    <Route exact path='/Helpandsupport' Component={Helpandsupport} />
    <Route exact path='/Userfeedback' Component={Userfeedback} />
    <Route exact path='/Userqueries' Component={Userqueries} />
    <Route exact path='/Adminlogin' Component={Adminlogin} />
    <Route exact path='/Exercisedashboard' Component={Exercisedashboard} />
    <Route exact path='/Challenge' Component={Challenge} />

    
    </Routes>        
    </BrowserRouter>  
   
      
      
      );
    }
    
    {/*<Route path='/Dash' Component={Dash} />
      <Route path='/Profile' Component={Userprofile} />                
      <Route path='/Trainer' Component={Trainer} />                
      <Route exact path='/Settings' Component={Settings} />*/}
    export default App;
    
    // <Route path='/' Component={Home} />
    // <Route path='/signup' Component={SignUp} />
    // <Route path='/login' Component={Login} />
    // <Route path='/contact' Component={Contact} />
    // <Route path='/about' Component={About} />
    // <Route path='/workout' Component={workout} />
    // <Route path='/privacy' Component={privacy} />
    // <Route path='/terms' Component={terms} />
    // <Route path='/Neatboard' Component={Neatboard} />
    // <Route path='/video' Component={video} />
    // <Route path='/Dash' Component={Dash} />
    // <Route path='/Profile' Component={Userprofile} />                
    // <Route path='/Trainer' Component={Trainer} />                
    // <Route exact path='/Settings' Component={Settings} />