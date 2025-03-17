import React from 'react'
import './Styles/Challenge.css';
import runbadge from './photos/runbadge.jpeg';
import pushupbadge from './photos/pushupbadge.jpeg';
import yogabadge from './photos/yogabadge.jpeg';
import pullupbadge from './photos/pullupbadge.png';
import Swal from 'sweetalert2';
function Challenge() {
  const handlepullup =async (e) => {
    e.preventDefault();
 
      Swal.fire("Congratulations! You got a Pull-Up Master Badge");
        
      
    };
  const handlemarathon =async (e) => {
    e.preventDefault();
 
      Swal.fire("Congratulations! You got a Marathon Runner Badge");
        
      
    };
  const handlepushup =async (e) => {
    e.preventDefault();
 
      Swal.fire("Congratulations! You got a Push-Up Pro Badge");
        
      
    };
  const handleyoga =async (e) => {
    e.preventDefault();
 
      Swal.fire("Congratulations! You got a Yoga Guru Badge");
        
      
    };
  

  return (
    <div className='Challenge_body'>

      <div className='Challenge_header'>
      <h1
    //  style="font-size: 2px;"
      >Challenges Yourself</h1> 
      
      </div>
      <div className='Challenge_main'>
        <div className='Challenge_section' id="challenges">
        <h2 className='Challenge_h2'>Challenges</h2>

        <div class="challenge">
        <h3>Yoga 30-Day Challenge</h3>
        <p>Practice yoga every day for a month. Improve flexibility and find inner peace!</p>
       {/* <form class="challenge_form">
          <input type="hidden" name="challenge_id" value="4"/>
          <input type="hidden" name="user_id" value="101"/>
</form>*/}
          <button onClick={handleyoga} className='challenge_button' type="submit">Completed</button>
      </div>

          <div className="challenge">
          <h3>100 Pull Up Challenge</h3>
          <p>Build upper body strength by completing 100 pull-ups every day for a month. You can do it!</p>
        {/*  <form className="challenge_form">
          <input type="hidden" name="challenge_id" value="1"/>
          <input type="hidden" name="user_id" value="123"/>
  </form>*/}
          <button onClick={handlepullup} className='challenge_button' type="submit">Completed</button>
          </div>

          <div class="challenge">
          <h3>Run a Marathon Challenge</h3>
          <p>Train to run a full marathon in 6 months. Lace up your shoes and get ready for an incredible journey!</p>
          {/*<form class="challenge_form">
            
            <input type="hidden" name="challenge_id" value="2"/>
            <input type="hidden" name="user_id" value="456"/>
</form>*/}
            <button onClick={handlemarathon}  className='challenge_button' type="submit">Completed</button>
        </div>

        <div class="challenge">
        <h3>100 Push-Up Challenge</h3>
        <p>Build upper body strength by completing 100 push-ups every day for a month. You can do it!</p>
       {/* <form class="challenge_form">
          <input type="hidden" name="challenge_id" value="3"/>
          <input type="hidden" name="user_id" value="789"/>
</form>*/}
          <button onClick={handlepushup} className='challenge_button' type="submit">Completed</button>
      </div>

      

      </div>

      <div className="section" id="rewards">
      <h2 className='Challenge_h2'>Rewards</h2>
      <div className="reward">
      <img src={pullupbadge} alt="Pull Up Master Badge"/>
      <h3>Pull-Up Master Badge</h3>
      <p className='challenge_p'>Congratulations! You've earned the Pull-Up Master badge. Keep up the great work!</p>
    </div>

    <div class="reward">
    <img src={runbadge} alt="Marathon Runner Badge"/>
    <h3>Marathon Runner Badge</h3>
    <p className='challenge_p'>You're a marathon runner! You've earned this badge for your incredible achievement.</p>
  </div>

  <div class="reward">
    <img src={pushupbadge} alt="Push-Up Pro Badge"/>
    <h3>Push-Up Pro Badge</h3>
    <p className='challenge_p'>Wow! You're a push-up pro now. Keep pushing your limits!</p>
  </div>
  
  <div class="reward">
    <img src={yogabadge} alt="Yoga Guru Badge"/>
    <h3>Yoga Guru Badge</h3>
    <p className='challenge_p'>You've mastered yoga! This badge acknowledges your dedication and progress.</p>
  </div>
      
      </div>
        






















          
      </div>



    </div>
  )
}

export default Challenge

