import React, { useState } from 'react';
import './Styles/helpandsupport.css';
import { Link, useNavigate } from 'react-router-dom';
import { HEADER } from '../Service/Api';
import axios from 'axios';

function Helpandsupport() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Your queries are submitted successfully and we`ll try to solve your problem as soon as possible');
   
  // };

  const nav = useNavigate();


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [queries, setQueries]=useState('');

    const handlepostqueries =async (e) => {
      e.preventDefault();
      try{
      
        console.log({
          name: name,
          email: email,
          queries: queries
        
        
        });

        const response=await axios.post('http://localhost:8080/helpandsupport/helpandsupportpost',{
          name: name,
          email: email,
          queries: queries
       
      },{headers:HEADER});

      if(response.status===200)
      {
        //  console.log("IN")
    alert('Your queries are submitted successfully and we`ll try to solve your problem as soon as possible');
  nav('/Helpandsupport')
       

      }
   }
   catch(error)
   {
    console.log("error");
   }
    
  };
  return (
    <div className='helpandsupport_background'>
     <Link style={{textDecoration:'none',color:'white'}} to="/home"><button type='submit' className='back_contact111' style={{height:'50px',width:'70px',backgroundColor:'red',marginLeft:'1400px',marginTop:'10px'}}>Back</button></Link>
      <div id='helpandsupport'>
      
      <h1 style={{color:'white'}}>Help And Support</h1>
      <form className='us_helpandsupport' style={{marginTop:'160px',position:'absolute',marginRight:'700px'}} 
      // onSubmit={handleSubmit}
      >

      
        <div  style={{color:'black'}}>
        <h5>If any Queries,Send a message</h5>
        </div>

          <input type='text' placeholder='Full Name' 
          onChange={(e)=>{setName(e.target.value)}}
          requied/>
          <input type='email' placeholder='Type Your E-mail' 
          onChange={(e)=>{setEmail(e.target.value)}}
          required/>
          <textarea placeholder='How can I help you? ' name='message'
          onChange={(e)=>{setQueries(e.target.value)}}
          ></textarea>
          <input type='submit' value='Submit'
          onClick={handlepostqueries} 
           />
       </form>



       <form className='us_helpandsupport' style={{marginTop:'80px',marginRight:'-800px'}}>

      
       <div  style={{color:'black'}}>
       <h4>Contact Information</h4>
       </div>
 
           <div  style={{color:'black',marginRight:'320px'}}>
           <h5>Email:</h5>
           <div>fitzone735@gmail.com</div>
           <br/>
           <h5>Phone number:</h5>
           <div>+91 9943044460</div>
           <br/>
           <h5>You Tube:</h5>
           <div>/UCjtI00k6r5SRf_XJT7SJwXw</div>
           <br/>
           <h5>Address:</h5>
           <div>No : 1063, Avinashi Road, Gym Road, Nav India, Peelamedu, Coimbatore - 641004</div>
           </div>
       </form>


       </div>
       </div>
  ) 
}

export default Helpandsupport;
