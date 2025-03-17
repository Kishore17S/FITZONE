import React, { useEffect, useState } from 'react'
import { SidebarData } from './SidebarData'
import { getuserqueries } from '../../Service/Api';

function Userqueries() {
    const[details,setDetails]=useState([]);
    useEffect(()=>{
      getUserqueries();
    },[])
    async function getUserqueries()
    {
      try{
          await getuserqueries().then((res)=>
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
    <span class="navbar-brand mb-0 h1">User Queries</span>
  </div>
</nav>
<br/>
  <div></div>

      <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>User Queries</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map(
                                      (current) => {
                                        return(

                                        <tr key = {current.id}>
                                           
                                            <td> {current.name}</td>
                                             <td> { current.email} </td>   
                                             <td> {current.queries}</td>
                                           
                           
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

export default Userqueries
