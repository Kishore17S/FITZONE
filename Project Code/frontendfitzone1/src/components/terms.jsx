import React from 'react';
import './Styles/terms.css';
import { Link } from 'react-router-dom';

function terms() {
  return (
    
    
    <div class="terms_content2">
      <div class="terms_content3">
        <h3 className='terms_content1'>Terms and Conditions</h3>
        <div>1. This is dependent on you maintaining payments of your monthly direct debit. If any monthly direct debit payment is not received on the due date for payment, then your membership will (except in exceptional circumstances and at our sole discretion) be automatically suspended until all due payments have been brought up to date.</div>
        <br></br>
        <div>2. You will be provided with your personal non-transferable membership number that you will be requested to show at the start of your activity session. If your membership number is used by anyone else with your knowledge or consent then we reserve the right in our sole discretion to suspend and/or cancel your membership.</div>
        <br></br>
        <div>3. Membership fees do not cover the cost of lockers. Any property stored in lockers is stored at your own risk. We regret that we cannot accept liability for any loss or damage that may occur to items stored in lockers.</div>
        <br></br>
        <div>4. On joining, all members are offered an induction to instruct you on the use of the equipment. We strongly recommend that this is undertaken. If you are subsequently unsure how to use any equipment, please ask a member of the team.</div>
        <br></br>
        <div>5.We endeavour to ensure that all facilities, classes and equipment are available during the advertised opening times. However, occasionally, facilities or equipment may be unavailable or classes cancelled. During festive periods opening times may be altered at the discretion of the management. These circumstances have been calculated within the membership fees.</div>
        <br/>
        <Link to='/home'><button style={{backgroundColor:'blue',width:'100px'}}>I Agree</button></Link>

                  
      </div>
    </div>
   
    )
  }
  
  export default terms
  