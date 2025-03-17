import React from 'react';
import './Styles/privacy.css';
import { Link } from 'react-router-dom';

function privacy() {
  return (
    
    <div class="privacy_content2">
      <div class="privacy_content3">
        <h3 className='privacy_content1'>Privacy Policy</h3>
        <div>1.  At Life Fitness, we respect the concerns of our customers, online visitors, mobile application users, and business partners (“you,” or “your”) about your personal information and value our relationship with you.</div>
        <br></br>
        <div>2. This Privacy Policy applies to information collected by Life Fitness, the Life Fitness Family of Brands, and any affiliated or subsidiary companies (“Life Fitness,” “we” or “us”), offline or online, including the websites and mobile applications that post a link to this Privacy Policy (collectively, our “Sites”).</div>
        <br></br>
        <div>3. This Privacy Policy explains the types of personal information we collect, how we use and process personal information, the legal basis for processing, and with whom we share personal information. </div>
        <br></br>
        <div>4. We also tell you how you can reach us to update your contact information, remove your name from our mailing lists, or get answers to questions you may have about our privacy practices</div>
        <br></br>
        <div>5. Please read this Privacy Policy carefully. By continuing to interact with our Sites or providing personal information to us after having an opportunity to review this Privacy Policy, you are agreeing to the practices described in this Privacy Policy. This Privacy Policy is incorporated by reference into the Terms of Use posted on each of our Sites.</div>
        <br/>
        <Link to='/home'><button style={{backgroundColor:'blue',width:'100px'}}>I Agree</button></Link>
                  
      </div>
    </div>
  )
}

export default privacy
