import React, { useEffect } from 'react';
import { SidebarData } from './SidebarData';
 // Import your CSS for styling
import { useState } from 'react';
// import './Dashboard.css';
import { deleteuserbyid, getuser } from '../../Service/Api';

function Userlist() {
    const[details,setDetails]=useState([]);
  useEffect(()=>{
    getUser();
  },[])
  async function getUser()
  {
    try{
        await getuser().then((res)=>
        {
          setDetails(res.data)
        })
    }
    catch(error){
      console.log("error");
    }
  }
  console.log(details);


  async function handleuserdelete(id){
    console.log(id);
   const response=await deleteuserbyid(id);
   console.log(response);
   if(response.status===204)
   {
     console.log("Deleted");
     getUser();
 
   }
   else{
     console.log("error");
   }
   }
 
  return (
    <>
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
     
      <div id='navbarcard'>
    


      
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">User Details</span>
  </div>
</nav>
<br />

      
  


    
      <div></div>

      <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>User Id</th>
                                    <th>User Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Height</th>
                                    <th>Weight</th>
                                    <th>Fitness Goals</th>
                                    <th>Phone Number</th>
                                  

                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map(
                                      (current) => {
                                        return(

                                        <tr key = {current.userid}>
                                            <td> {current.userid}</td>
                                            <td> {current.username}</td>
                                             <td> { current.age} </td>   
                                             <td> {current.gender}</td>
                                             <td> {current.height}</td>
                                             <td> {current.weight}</td>
                                             <td> {current.fitnessgoals}</td>
                                             <td> {current.phnumber}</td>
                                            
                                            
                                             {/* <td> {current.prod.price}</td>  */}
                                             <td>
                                             <button style={{marginLeft: "10px"}} onClick={ () => {}} className="btn btn-danger" style={{width:"70px",padding:"5px",marginLeft:'5px'}} onClick={ () => {handleuserdelete(current.userid);}}>Delete </button>
                                                {/* <button onClick={ () => {}} className="btn btn-info" style={{width:"70px",padding:"5px"}}>Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => {}} className="btn btn-info" style={{width:"70px",padding:"5px",marginLeft:'5px'}}>View </button>*/}
                                             </td>
                                        </tr>
                                        )
                                      }
                                    )
                                }
                            </tbody>
                           

                            
                        </table>
                 </div>
      </div>
    </>
  )
}

export default Userlist
