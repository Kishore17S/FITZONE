import React from 'react'
import './Exercisedashboard.css';
import treadmill from '../photos/treadmill.jpg';
import trxrow from '../photos/trxrow.png';
import squat from '../photos/squat.png';
import bicycle from '../photos/bicycle.png';
import facepull from '../photos/facepull.jpeg';
import overheadpress from '../photos/overheadpress.jpeg';
import uprightrow from '../photos/uprightrow.jpeg';
import dumbell from '../photos/dumbell.jpeg';
import deadlift from '../photos/deadlift.png';
import pushup from '../photos/pushup.PNG';
import benchpress from '../photos/benchpress.jpeg';
import chestdip from '../photos/chestdip.jpeg';
import standingfly from'../photos/standingfly.png';



import { SidebarData } from './SidebarData';
function Exercisedashboard() {
  return (
    <>
    <div>
    <nav className="sidebardash">
    <ul className="nav-menu">
      {SidebarData.map((item, index) => (
        <li key={index} className="nav-item">
          <a href={item.path} className="nav-link">
            {item.icon}
            <span className="nav-text">{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>

  <nav class="navbar navbar-light bg-light" style={{marginLeft:'220px'}}>
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Exercise Details</span>
      </div>
    </nav>

    <div id='exercisedashboard'>
    <div className='exercisedashboard_workout_card41' style={{position:'absolute'}}>
         <img src={treadmill} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container41'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Treadmill</b><br/>
         </h4>
         </div>
         </div>
    <div className='exercisedashboard_workout_card42' style={{position:'absolute'}}>
         <img src={trxrow} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container42'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>TRX Row</b><br/>
         </h4>
         </div>
         </div>
    <div className='exercisedashboard_workout_card43' style={{position:'absolute'}}>
         <img src={squat} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container43'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Squat</b><br/>
         </h4>
         </div>
         </div>
    <div className='exercisedashboard_workout_card44' style={{position:'absolute'}}>
         <img src={bicycle} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container44'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Bicycle</b><br/>
         </h4>
         </div>
         </div>
    <div className='exercisedashboard_workout_card21' style={{position:'absolute'}}>
         <img src={facepull} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container21'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Face Pull - Cable</b><br/>
         </h4>
         </div>
         </div>
         <div className='exercisedashboard_workout_card31' style={{position:'absolute'}}>
         <img src={deadlift} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container31'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>DeadLift</b><br/>
         </h4>
         </div>
         </div>
    <div className='exercisedashboard_workout_card22' style={{position:'absolute'}}>
         <img src={overheadpress} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container22'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Overhead Press - Dumbbell</b><br/>
         </h4>
         </div>
         </div>
         <div className='exercisedashboard_workout_card23' style={{position:'absolute'}}>
         <img src={uprightrow} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container23'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Upright Row - Barbell</b><br/>
         </h4>
         </div>
         </div>
    <div className='exercisedashboard_workout_card24' style={{position:'absolute'}}>
         <img src={dumbell} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container24'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Lateral Raise - Dumbbell</b><br/>
         </h4>
         </div>
         </div>
         <div className='exercisedashboard_workout_card22' style={{position:'absolute'}}>
         <img src={overheadpress} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container22'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Overhead Press - Dumbbell</b><br/>
         </h4>
         </div>
         </div>
         <div className='exercisedashboard_workout_card32' style={{position:'absolute'}}>
         <img src={pushup} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container32'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Push Up</b><br/>
         </h4>
         </div>
         </div>
    <div className='exercisedashboard_workout_card33' style={{position:'absolute'}}>
         <img src={benchpress} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container33'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Bench Press</b><br/>
         </h4>
         </div>
         </div>
    <div className='exercisedashboard_workout_card11' style={{position:'absolute'}}>
         <img src={chestdip} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container11'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Chest Dip</b><br/>
         </h4>
         </div>
         </div>
    <div className='exercisedashboard_workout_card12' style={{position:'absolute'}}>
         <img src={standingfly} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container12'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Standing Decline Fly</b><br/>
         </h4>
         </div>
         </div>
         <div className='exercisedashboard_workout_card34' style={{position:'absolute'}}>
         <img src={squat} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='exercisedashboard_workout_container34'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b style={{color:'black'}}>Squat</b><br/>
         </h4>
         </div>
         </div>
    


         
         
         </div>
    </div>
    </>
  )
}

export default Exercisedashboard
