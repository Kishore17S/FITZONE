import React, { useState } from 'react';
import './Styles/Processtracker.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HEADER } from '../Service/Api';

function Processtracker() {

    const [workoutname, setWorkoutname] = useState('');
  const [exercisename, setExercisename] = useState('');
  const [setscompleted, setSetscompleted] = useState('');
  const [repscompleted, setRepscompleted] = useState('');
  const [weightused, setWeightused] = useState('');

  const nav = useNavigate();

  const handleProcesstracker =async (e) => {
    e.preventDefault();
      try{
      
        console.log({
            workoutname:workoutname,
            exercisename:exercisename,
            setscompleted:setscompleted,
            repscompleted:repscompleted,
            weightused:weightused
        
        });

    const response=await axios.post('http://localhost:8080/processtracker/processtrackerpost',{
        workoutname:workoutname,
        exercisename:exercisename,
        setscompleted:setscompleted,
        repscompleted:repscompleted,
        weightused:weightused
    },{headers:HEADER})

        if(response.status===200)
      {
         console.log("IN")
         nav('/Userprogress')
       

      }
   }
   catch(error)
   {
    console.log("error");
   }

};


  return (
    <div style={{marginLeft:'600px',marginTop:'50px'}}>
    <h3 style={{marginLeft:'70px',marginBottom:'30px'}}>User progress</h3>
    <form >
    {/*<div class="mb-3">
        <label for="id" class="form-label">ID</label>
        <input type="text" class="form-control" id="id" />
  </div>*/}
  <div class="mb-3">
  <label for="workoutName" class="form-label">Workout Name</label>
  <input type="text" class="form-control" id="workoutName" value={workoutname} onChange={(e) => setWorkoutname(e.target.value)} />
</div>
    <div class="mb-3">
        <label for="exerciseName" class="form-label">Exercise Name</label>
        <input type="text" class="form-control" id="exerciseName" value={exercisename} onChange={(e) => setExercisename(e.target.value)} />
    </div>
    <div class="mb-3">
        <label for="setsCompleted" class="form-label">Sets Completed</label>
        <input type="text" class="form-control" id="setsCompleted" value={setscompleted} onChange={(e) => setSetscompleted(e.target.value)} />
    </div>
    <div class="mb-3">
        <label for="repsCompleted" class="form-label">Reps Completed</label>
        <input type="text" class="form-control" id="repsCompleted" value={repscompleted} onChange={(e) => setRepscompleted(e.target.value)}/>
    </div>
    <div class="mb-3">
        <label for="weight" class="form-label">Weight</label>
        <input type="text" class="form-control" id="weight" value={weightused} onChange={(e) => setWeightused(e.target.value)}/>
    </div>
    <button type="submit" class="btn btn-primary" onClick={handleProcesstracker}>Submit</button>
</form>
</div>
  )
}

export default Processtracker;
