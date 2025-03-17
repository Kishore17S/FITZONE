import React from 'react'
import "./Styles/Shoulder.css";
// import fimage1 from './1.svg';
// import fimage2 from './2.svg';
// import fimage3 from './3.svg';
// import fimage4 from './4.svg';
// import s1image from './photos/5.png';
import facepull from './photos/facepull.jpeg';
import overheadpress from './photos/overheadpress.jpeg';
import uprightrow from './photos/uprightrow.jpeg';
import dumbell from './photos/dumbell.jpeg';
import { Link } from 'react-router-dom';

function Chestworkout() {
  return (
    <div>
    <div id='shoulder_features'>
    <h1 style={{color:'white',textAlign:"center",display:"inline-block"}}>SHOULDER EXERCISE</h1>
    
    
         <div className='shoulder_workout_card1' style={{marginTop:'-350px',position:'absolute'}}>
         <img src={facepull} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='shoulder_workout_container1'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b>Face Pull - Cable</b><br/>
         <b>4 sets</b><br />
         <b>8 reps</b>
         </h4>
         </div>
         </div>

         <div className='shoulder_workout_card2' style={{marginTop:'-350px',position:'absolute'}}>
         <img src={overheadpress} alt='Avatar' style={{width:"100%",height:'200px'}}></img>
         <div className='shoulder_workout_container2'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b>Overhead Press - Dumbbell</b><br/>
         <b>4 sets</b><br />
         <b>8 reps</b>
         </h4>
         </div>
         </div>

         <div className='shoulder_workout_card3' style={{marginTop:'-300px',position:'absolute'}}>
         <img src={uprightrow} alt='Avatar' style={{width:"100%",height:'200px'}}></img>
         <div className='shoulder_workout_container3'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b>Upright Row - Barbell</b><br/>
         <b>4 sets</b><br />
         <b>8 reps</b>
         </h4>
         </div>
         </div>

         <div className='shoulder_workout_card4' style={{marginTop:'-300px',position:'absolute'}}>
         <img src={dumbell} alt='Avatar' style={{width:"100%",height:'200px'}}></img>
         <div className='shoulder_workout_container4'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b>Lateral Raise - Dumbbell</b><br/>
         <b>4 sets</b><br />
         <b>8 reps</b>
         </h4>
         </div>
         </div>
         <button type='submit'  style={{height:'50px',width:'170px',backgroundColor:'red',marginRight:"-1200px",marginTop:"500px"}}> <Link style={{textDecoration:'none',color:'white'}} to="/Processtracker">Completed Status</Link></button>

         </div>
    </div>
    
    
    )
  }
  
  export default Chestworkout
  
  
  