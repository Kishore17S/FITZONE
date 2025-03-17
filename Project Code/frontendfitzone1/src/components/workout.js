import React from 'react'
import "./Styles/workout.css";
import fimage1 from './1.svg';
import fimage2 from './2.svg';
import fimage3 from './3.svg';
import fimage4 from './4.svg';
import { Link } from 'react-router-dom';
// import workoutbox from './workoutbox';
function workout() {
  return (
    <div>
    <div id='features'>
    <h1 style={{color:'white',textAlign:"center",display:"inline-block"}}>WORKOUTS</h1>
    
    
         <div className='workout_card1' style={{marginTop:'-350px',position:'absolute'}}>
         <img src={fimage1} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='workout_container1'>
         
         <h4 style={{color:'white',textAlign:"center"}}><b><Link style={{textDecoration:'none',color:'white'}} to="/Chestworkout">Chest</Link></b></h4>
         
         </div>
         </div>

         <div className='workout_card2' style={{marginTop:'-350px',position:'absolute'}}>
         <img src={fimage2} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='workout_container2'>
         <h4 style={{color:'white',textAlign:"center"}}><b><Link style={{textDecoration:'none',color:'white'}} to="/Shoulder">Shoulder</Link></b></h4>
         </div>
         </div>

         <div className='workout_card3' style={{marginTop:'-310px',position:'absolute'}}>
         <img src={fimage3} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='workout_container3'>
         <h4 style={{color:'white',textAlign:"center"}}><b><Link style={{textDecoration:'none',color:'white'}} to="/Strength">Strengthing</Link></b></h4>
         </div>
         </div>

         <div className='workout_card4' style={{marginTop:'-310px',position:'absolute'}}>
         <img src={fimage4} alt='Avatar' style={{width:"100%",height:'230px'}}></img>
         <div className='workout_container4'>
         <h4 style={{color:'white',textAlign:"center"}}><b><Link style={{textDecoration:'none',color:'white'}} to="/Cardio">Cardio</Link></b></h4>
         </div>
         </div>

         <button type='submit'  style={{height:'50px',width:'170px',backgroundColor:'white',marginRight:"-1200px",marginTop:"500px"}}> <Link style={{textDecoration:'none',color:'black'}} to="/video">Sample videos</Link></button>

        </div>
    </div>
    
    
    )
  }
  
  export default workout
  
  
  {/* <div>
    <div id='features'>
    <h1 style={{color:'white',marginTop:"-70px",textAlign:"center",display:"inline-block"}}>WORKOUTS</h1>
    <li>
    <div className="image1_container">
    <img className="image1_workout" src={fimage1} alt='1'></img>
    <div className="image1_workout1" >WeightLifting</div>
    </div></li>
    <li>
    <div className="image1_container">
    <img className="image1_workout2" src={fimage2} alt='2'></img>
    <div className="image1_workout21" >Specific Muscle</div>
    </div></li>
    <li>
    <div className="image1_container">
    <img className="image1_workout3" src={fimage3} alt='3'></img>
    <div className="image1_workout31" >Strengthing</div>
    </div></li>
    <li>
    <div className="image1_container">
    <img className="image1_workout4" src={fimage4} alt='4'></img>
    <div className="image1_workout41" >Cardio</div>
    </div></li>

    </div>
  </div>*/}
  
  
  

  {/*<div className='new_a-container'>
     } <workoutbox image={fimage1} tittle="WeightLifting" />
      <workoutbox image={fimage2} tittle="Specific Muscle" />
      <workoutbox image={fimage3} tittle="Flex Your Muscle" />
      <workoutbox image={fimage4} tittle="Cardio Exercise" />
    </div>*/}