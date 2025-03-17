import React from 'react'
import "./Styles/Cardio.css";
// import fimage1 from './1.svg';
// import fimage2 from './2.svg';
// import fimage3 from './3.svg';
// import fimage4 from './4.svg';
import squat from './photos/squat.png';
import deadlift from './photos/deadlift.png';
import pushup from './photos/pushup.PNG';
import benchpress from './photos/benchpress.jpeg'
import { Link } from 'react-router-dom';

function Chestworkout() {
  return (
    <div>
    <div id='cardio_features'>
    <h1 style={{color:'white',textAlign:"center",display:"inline-block"}}>STRENGTH EXERCISE</h1>
    
    
         <div className='cardio_workout_card1' style={{marginTop:'-350px',position:'absolute'}}>
         <img src={squat} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='cardio_workout_container1'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b>Squat</b><br/>
         <b>15 sets</b><br />
         <b>3 reps</b>
         </h4>
         </div>
         </div>

         <div className='cardio_workout_card2' style={{marginTop:'-350px',position:'absolute'}}>
         <img src={deadlift} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='cardio_workout_container2'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b>DeadLift</b><br/>
         <b>5 sets</b><br />
         <b>2 reps</b>
         </h4>
         </div>
         </div>

         <div className='cardio_workout_card3' style={{marginTop:'-300px',position:'absolute'}}>
         <img src={pushup} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='cardio_workout_container3'>
         <h4 style={{color:'white',textAlign:"center"}}><b>Push up</b><br/>
         <b>10 sets</b><br />
         <b>5 reps</b>
         </h4>
         </div>
         </div>

        <div className='cardio_workout_card4' style={{marginTop:'-300px',position:'absolute'}}>
         <img src={benchpress} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='cardio_workout_container4'>
         <h4 style={{color:'white',textAlign:"center"}}><b>Bench Press</b><br/>
         <b>5 sets</b><br />
         <b>3 reps</b></h4>
         </div>
  </div>
  <button type='submit'  style={{height:'50px',width:'170px',backgroundColor:'red',marginRight:"-1200px",marginTop:"500px"}}> <Link style={{textDecoration:'none',color:'white'}} to="/Processtracker">Completed Status</Link></button>

        
        </div>
    </div>
    
    
    )
  }
  
  export default Chestworkout
  
  
  