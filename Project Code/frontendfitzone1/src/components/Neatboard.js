import React from 'react';
import { NeatboardData } from './NeatboardData';
import './Styles/Neatboard.css';
// import {NeatboardData} from './NeatboardData';
function Neatboard() {
  return (
   <div>
   <div className='hi_dash'>hiiiiiiiiiiiiiiiiiiii</div>
    <div className='neatboard_Sidebar'>
      <ul className='neatboard_SidebarList'>
        {NeatboardData.map((val,key)=>{
          return (
            <li 
            key={key}
            className='neatboard_row'
            id={ window.location.pathname===val.link?"neatboard_active":""}
          onClick={()=>{
            window.location.pathname=val.link;
          }}
          >
              <div id='neatboard_icon'>
                {val.icon}
              </div>
              <div id='neatboard_title'>
                {val.title}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
    
    );  
  }
  
export default Neatboard
