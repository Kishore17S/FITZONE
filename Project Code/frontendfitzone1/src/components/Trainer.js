import React from 'react'
import SideNavBar from './SideNavBar'
import "./Styles/Trainer.css";

function Trainer() {
  return (
    <>
    <div className='t-wrapper'>
        <SideNavBar/>
        <div className='t-body'>
            <div className="t-widgets">
                <div className="t-widget">
                    <h2>Workout Statistics</h2>
                    <p>Placeholder content for workout statistics.</p>
                    </div>
                <div className="t-widget">
                    <h2>Member Analytics</h2>
                    <p>Placeholder content for member analytics.</p>
                </div>
                <div className="t-widget">
                    <h2>No of Users</h2>
                    <p>Placeholder content for workout statistics.</p>
                    </div>
                <div className="t-widget">
                    <h2>Member Analytics</h2>
                    <p>Placeholder content for member analytics.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Trainer