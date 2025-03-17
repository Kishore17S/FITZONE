import React, { useEffect } from 'react';
import { useState } from 'react';
import { deletetrainerbyid, gettrainer } from '../../Service/Api';
import { SidebarData } from './SidebarData.js';
import { Link } from 'react-router-dom';


function Trainerdashboard() {
    const[details,setDetails]=useState([]);
    useEffect(()=>{
      getTrainer();
    },[])
    async function getTrainer()
    {
      try{
          await gettrainer().then((res)=>
          {
            setDetails(res.data)
          })
      }
      catch(error){
        console.log("error");
      }
    }
    console.log(details);

    async function handledelete(id){
      console.log(id);
     const response=await deletetrainerbyid(id);
     console.log(response);
     if(response.status===204)
     {
       console.log("Deleted");
       getTrainer();
   
     }
     else{
       console.log("error");
     }
     }

     const [ID, setID] = useState(0);
     let handleEdit=(id)=>{
      localStorage.setItem("trainerID",id);
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
        <span class="navbar-brand mb-0 h1">Trainer Details</span>
      </div>
    </nav>
      <div>

      <Link style={{textDecoration:'none',color:'white'}} to="/Addtrainerdashboard"><button style={{marginLeft: "10px"}} onClick={ () => {}} className="btn btn-info" style={{width:"130px",padding:"5px",marginLeft:'5px' ,marginTop:'30px'}}>Add Trainer </button></Link>
      
      </div>
      
      <br/>
      <div className = "row" >
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Trainer Id</th>
                                    <th>Trainer Name</th>
                                    <th>Email</th>
                                    <th>Phone number</th>
                                    <th>Age</th>
                                    <th>Experience</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map(
                                      (current) => {
                                        return(

                                        <tr key = {current.trainerid}>
                                            <td> {current.trainerid}</td>
                                            <td> {current.trainername}</td>
                                             <td> { current.email} </td>   
                                             <td> {current.phonenumber}</td>
                                             <td> {current.age}</td>
                                             <td> {current.experience}</td>
                                             {/* <td> {current.prod.price}</td>  */}
                                             <td>
                                             <button style={{marginLeft: "10px"}} onClick={ () => {}} className="btn btn-danger" style={{width:"70px",padding:"5px",marginLeft:'5px'}} onClick={ () => {handledelete(current.trainerid);}} >Delete </button>
                                            
                                           <Link to='/Updatetrainerdashboard'> <button onClick={ () => {handleEdit(current.trainerid)}} className="btn btn-info" style={{width:"70px",padding:"5px"}}>Update </button></Link> 
                                       {/* <button style={{marginLeft: "10px"}} onClick={ () => {}} className="btn btn-info" style={{width:"70px",padding:"5px",marginLeft:'5px'}}>View </button>*/}

                                        
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
  );
}

export default Trainerdashboard;


