import React, { useState } from 'react';

import './Addtrainerdashboard.css';
import axios from 'axios';
import { HEADER } from '../../Service/Api';
import { useNavigate } from 'react-router-dom';

function Addtrainerdashboard() {
     
  const nav = useNavigate();


    const [trainername, setTrainername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenum, setPhonenum]=useState('');
    const [age, setAge]=useState(0);
    const [experience, setExperience]=useState(0);
    

    const handlesaveupdate =async (e) => {
      e.preventDefault();
      try{
      
        console.log({
          trainername: trainername,
          email: email,
          phonenumber: phonenum,
        age:age,
        experience:experience
        
        });

        const response=await axios.post('http://localhost:8080/trainer/trainerpost',{
          trainername: trainername,
          email: email,
          phonenumber: phonenum,
        age:age,
        experience:experience
       
      },{headers:HEADER});

      if(response.status===200)
      {
         console.log("IN")
         nav('/Trainerdashboard')
       

      }
   }
   catch(error)
   {
    console.log("error");
   }
    
  };

  
    
  return (
   
   <div className='bg'>
   <div className='back2'>
     <h2 className='header2'>Add Trainer</h2>
     <form className='form2' 
    //  onSubmit={handleSubmit}
     >
       
       {/*<div className='dp_userid2'>
                 <label className='Userdatalabel2' htmlFor="userid">Trainer ID :</label>
                 <input className='Userdatainput2'
                   type="number"
                   id="userid"
                   name="userid"
                  //  value={formData.userid}
                  //  onChange={handleInputChange}
                   required
                 />
  </div>*/}
       
               <div className='dp_name'>
                 <label className='Userdatalabel2' htmlFor="username">Trainer Name :</label>
                 <input className='Userdatainput2'
                   type="username"
                   id="username"
                   name="username"
                   onChange={(e)=>{setTrainername(e.target.value)}}
                  //  value={formData.username}
                  //  onChange={handleInputChange}
                   required
                 />
               </div>
       
               <div className='dp_gender2'>
                 <label className='Userdatalabel2' htmlFor="gender">Email :</label>
                 <input className='Userdatainput2'
                   type="text"
                   id="gender"
                   name="gender"
                   onChange={(e)=>{setEmail(e.target.value)}}

                  //  value={formData.gender}
                  //  onChange={handleInputChange}
                   required
                 />
               </div>
               <div className='dp_height2'>
                 <label className='Userdatalabel2' htmlFor="height">Phone Number :</label>
                 <input className='Userdatainput2'
                   type="text"
                   id="height"
                   name="height"
                   onChange={(e)=>{setPhonenum(e.target.value)}}

                  //  value={formData.height}
                  //  onChange={handleInputChange}
                   required
                 />
               </div>
               <div className='dp_age2'>
                 <label className='Userdatalabel2' htmlFor="age">Age:</label>
                 <input className='Userdatainput2'
                   type="age"
                   id="age"
                   name="age"
                   onChange={(e)=>{setAge(e.target.value)}}

                  //  value={formData.age}
                  //  onChange={handleInputChange}
                   required
                 />
               </div>
               <div className='dp_weight2'>
                 <label className='Userdatalabel2' htmlFor="weight">Experience :</label>
                 <input className='Userdatainput2'
                   type="text"
                   id="weight"
                   name="weight"
                   onChange={(e)=>{setExperience(e.target.value)}}

                  //  value={formData.weight}
                  //  onChange={handleInputChange}
                   required
                 />
               </div>
              

       <div >
         <button className='userdatabutton2' type="submit" onClick={handlesaveupdate}>Submit</button>
       </div>
     </form>
   </div>
 </div>
  )
}

export default Addtrainerdashboard
