import React from 'react'
import SideNavBar from './SideNavBar'
import "./Styles/Dash.css";



function Dash() {
  return (
    <>
    <div className='d-wrapper'>
        <SideNavBar/>
        <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Price</th>
                                    <th>Product Name</th>
                                    <th>Product Cate</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                           
                            
                        </table>
                 </div>
    </div>
    </>
  )
}

export default Dash