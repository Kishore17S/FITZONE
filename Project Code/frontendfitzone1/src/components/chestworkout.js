import React from 'react'
import "./Styles/chestworkout.css";
// import fimage1 from './1.svg';
// import fimage2 from './2.svg';
// import fimage3 from './3.svg';
// import fimage4 from './4.svg';
// import s1image from './photos/5.png';
import benchpress from './photos/benchpress.jpeg';
import pushup from './photos/pushup.PNG';
import chestdip from './photos/chestdip.jpeg';
import standingfly from'./photos/standingfly.png';
import { Link } from 'react-router-dom';

function Chestworkout() {
  return (
    <div>
    <div id='chest_features'>
    <h1 style={{color:'white',textAlign:"center",display:"inline-block"}}>CHEST EXERCISE</h1>
    
    
         <div className='chest_workout_card1' style={{marginTop:'-350px',position:'absolute'}}>
         <img src={benchpress} alt='Avatar' style={{width:"100%"}}></img>
         <div className='chest_workout_container1'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b>Bench Press</b><br/>
         <b>5 sets</b><br />
         <b>3 reps</b>
         </h4>
         </div>
         </div>

         <div className='chest_workout_card2' style={{marginTop:'-350px',position:'absolute'}}>
         <img src={pushup} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='chest_workout_container2'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b>Push Up</b><br/>
         <b>4 sets</b><br />
         <b>8 reps</b>
         </h4>
         </div>
         </div>

         <div className='chest_workout_card3' style={{marginTop:'-300px',position:'absolute'}}>
         <img src={chestdip} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='chest_workout_container3'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b>Chest Dip</b><br />
         <b>4 sets</b><br />
         <b>8 reps</b>
         </h4>
         </div>
         </div>

         <div className='chest_workout_card4' style={{marginTop:'-300px',position:'absolute'}}>
         <img src={standingfly} alt='Avatar' style={{width:"100%",height:'210px'}}></img>
         <div className='chest_workout_container4'>
         <h4 style={{color:'white',textAlign:"center"}}>
         <b>Standing Decline Fly</b><br />
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
  
  
  