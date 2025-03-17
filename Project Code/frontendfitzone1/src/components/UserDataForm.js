// import React, { useState } from 'react';
// import "./Styles/UserDataForm.css";
// import {useNavigate} from 'react-router-dom';
// import { Link } from 'react-router-dom';

// function UserDataForm() {
//   const [formData, setFormData] = useState({
//     userid: '',
//     age: '',
//     gender: '',
//     height: '',
//     weight: '',
//     goal: '',
//     phoneNumber: '',
    
//   });
//   // const nav = useNavigate();
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     // nav("/home")
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can process and store the user data here, e.g., send it to a server
//     console.log('User Data:', formData);
//   };
  
//   return (
//     <div className='bg'>
    
    
//     <div className='back'>
//       <h2 className='header'>Enter User Data</h2>
//       <form className='form' onSubmit={handleSubmit}>
//         <div className='dp_userid'>
//           <label htmlFor="userid">User ID:</label>
//           <input
//             type="number"
//             id="userid"
//             name="userid"
//             value={formData.userid}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className='dp_name'>
//           <label htmlFor="name">User Name:</label>
//           <input
//             type="name"
//             id="nameid"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className='dp_age'>
//           <label htmlFor="age">Age:</label>
//           <input
//             type="age"
//             id="age"
//             name="age"
//             value={formData.age}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className='dp_gender'>
//           <label htmlFor="gender">Gender:</label>
//           <input
//             type="text"
//             id="gender"
//             name="gender"
//             value={formData.gender}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className='dp_height'>
//           <label htmlFor="height">Height:</label>
//           <input
//             type="text"
//             id="height"
//             name="height"
//             value={formData.height}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className='dp_weight'>
//           <label htmlFor="weight">Weight:</label>
//           <input
//             type="text"
//             id="weight"
//             name="weight"
//             value={formData.weight}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className='dp_goal'>
//           <label htmlFor="goal">Goal:</label>
//           <input
//             type="text"
//             id="goal"
//             name="goal"
//             value={formData.goal}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className='dp_ph'>
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//          <button type="submit"><Link style={{textDecoration:'none', color:'white'}} to="/home">Submit</Link></button>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default UserDataForm;



import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './Styles/UserDataForm.css';
import { useNavigate } from 'react-router-dom';
import { HEADER } from '../Service/Api';

function UserDataForm() {
  const nav = useNavigate();


  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender]=useState('');
  const [height, setHeight]=useState('');
  const [weight, setWeight]=useState('');
  const [fitnessgoals, setFitnessgoals]=useState('');
  const [phnumber, setPhnumber]=useState('');
  
  const handlepostuser =async (e) => {
    e.preventDefault();
    try{
    
      console.log({
        username: username,
        age:age,
        gender: gender,
        height: height,
        weight:weight,
        fitnessgoals:fitnessgoals,
        phnumber:phnumber
      
      });

      const response=await axios.post('http://localhost:8080/gymuser/gymuserpost',{
        username: username,
        age:age,
        gender: gender,
        height: height,
        weight:weight,
        fitnessgoals:fitnessgoals,
        phnumber:phnumber
     
    },{headers:HEADER});

    if(response.status===200)
    {
       console.log("IN")
       nav('/home')
     

    }
 }
 catch(error)
 {
  console.log("error");
 }
  
};


  return (
    <div className='bg'>
      <div className='back1'>
        <h2 className='header1'>Enter User Data</h2>
        <form className='form1' 
        // onSubmit={handleSubmit}
        >
          
         {/*} <div className='dp_userid1'>
                    <label className='Userdatalabel1' htmlFor="userid">User ID:</label>
                    <input className='Userdatainput1'
                      type="number"
                      id="userid"
                      name="userid"
                      value={formData.userid}
                      onChange={handleInputChange}
                      required
                    />
  </div>*/}
          
                  <div className='dp_name'>
                    <label className='Userdatalabel1' htmlFor="username">User Name:</label>
                    <input className='Userdatainput1'
                      type="username"
                      id="username"
                      name="username"
                      onChange={(e)=>{setUsername(e.target.value)}}

                      // value={formData.username}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>
          
                  <div className='dp_age1'>
                    <label className='Userdatalabel1' htmlFor="age">Age:</label>
                    <input className='Userdatainput1'
                      type="age"
                      id="age"
                      name="age"
                      onChange={(e)=>{setAge(e.target.value)}}

                      // value={formData.age}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className='dp_gender1'>
                    <label className='Userdatalabel1' htmlFor="gender">Gender:</label>
                    <input className='Userdatainput1'
                      type="text"
                      id="gender"
                      name="gender"
                      onChange={(e)=>{setGender(e.target.value)}}

                      // value={formData.gender}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className='dp_height1'>
                    <label className='Userdatalabel1' htmlFor="height">Height:</label>
                    <input className='Userdatainput1'
                      type="text"
                      id="height"
                      name="height"
                      onChange={(e)=>{setHeight(e.target.value)}}

                      // value={formData.height}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className='dp_weight1'>
                    <label className='Userdatalabel1' htmlFor="weight">Weight:</label>
                    <input className='Userdatainput1'
                      type="text"
                      id="weight"
                      name="weight"
                      onChange={(e)=>{setWeight(e.target.value)}}

                      // value={formData.weight}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className='dp_goal1'>
                    <label className='Userdatalabel1' htmlFor="fitnessgoals">Goal:</label>
                    <input className='Userdatainput1'
                      type="text"
                      id="fitnessgoals"
                      name="fitnessgoals"
                      onChange={(e)=>{setFitnessgoals(e.target.value)}}

                      // value={formData.fitnessgoals}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className='dp_ph1'>
                    <label className='Userdatalabel1' htmlFor="phnumber">Phone Number:</label>
                    <input className='Userdatainput1'
                      type="tel"
                      id="phnumber"
                      name="phnumber"
                      onChange={(e)=>{setPhnumber(e.target.value)}}

                      // value={formData.phnumber}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>

          <div >
            <button className='userdatabutton1' type="submit" onClick={handlepostuser}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
} 
  

export default UserDataForm;
