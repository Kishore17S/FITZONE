import React from 'react'
import SideNavBar from './SideNavBar';
import "./Styles/userprofile.css";


function Userprofile() {
  return (
    <>
    <div className='u-wrapper'>
        <SideNavBar/>
        <div className='u-body'>
        <div className="u-widgets">
                <div className="u-widget">
                    <h2>Workout Statistics</h2>
                    <p>Placeholder content for workout statistics.</p>
                </div>
                <div className="u-widget">
                    <h2>Member Analytics</h2>
                    <p>Placeholder content for member analytics.</p>
                </div>
                <div className="u-widget">
                    <h2>No of Users</h2>
                    <p>Placeholder content for workout statistics.</p>
                    </div>
                <div className="u-widget">
                    <h2>Member Analytics</h2>
                    <p>Placeholder content for member analytics.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Userprofile