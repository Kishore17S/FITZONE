import React, { useEffect, useState } from 'react'
import { SidebarData1 } from '../Userdashboard/SidebarData1';
import { getuserprogress } from '../../Service/Api';
import { Link } from 'react-router-dom';


function Userprogress() {
    const[details,setDetails]=useState([]);
    useEffect(()=>{
      getUserprogress();
    },[])
    async function getUserprogress()
    {
      try{
          await getuserprogress().then((res)=>
          {
            setDetails(res.data)
          })
      }
      catch(error){
        console.log("error");
      }
    }
    console.log(details);
    

  return (
    <>
    <nav className="sidebardash">
    <ul className="nav-menu">
      {SidebarData1.map((item, index) => (
        <li key={index} className="nav-item">
          <a href={item.path} className="nav-link">
            {item.icon}
            <span className="nav-text">{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>

  <div id='navbarcard' >

  <br />
  <br />
  <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                   
                                    <th>Workout Name</th>
                                    <th>Exercise Name</th>
                                    <th>Sets Completed</th>
                                    <th>Reps Completed</th>
                                    
                                    <th>Weight Used</th>
                                  
                                    
                                    
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                    details.map(
                                      (current) => {
                                        return(

                                        <tr key = {current.workoutname}>
                                            <td> {current.workoutname}</td>
                                            <td> {current.exercisename}</td>
                                            <td> {current.setscompleted}</td>
                                             <td> { current.repscompleted} </td>   
                                             <td> {current.weightused}</td>
                                             
                                            
                                             {/* <td> {current.prod.price}</td>  */}
                                             {/*<td>
                                                 <button onClick={ () => {}} className="btn btn-info" style={{width:"70px",padding:"5px"}}>Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => {}} className="btn btn-info" style={{width:"70px",padding:"5px",marginLeft:'5px'}}>View </button>
                                                </td>*/}
                                               {/* <td>
                                                <button  onClick={ () => {}}  style={{marginLeft: "10px",width:"100px",padding:"5px",marginLeft:'5px'}}>Completed </button>
                                              </td>*/}
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

export default Userprogress;
