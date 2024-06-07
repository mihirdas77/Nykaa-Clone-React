import styled from '@emotion/styled'
import React from 'react'

import play from "../Images/play.png"
import footer from "../Images/footer.png"

export const Footer = () => {
  return (
    <DIV>
        <div className='footer1'>
           <div>
            <h5><i class='bx bx-envelope'></i>Get special discount on your inbox</h5>
            <input placeholder='Your Email' type="text" />
            <button>SEND</button>

           </div>
           <div>
            <p><i class='bx bx-mobile-alt'></i>EXPERIENCE THE NYKAA MOBILE APP</p>
            <img src={play} alt="" />

           </div>
           <div>
            <h5><i class='bx bxs-phone-call'></i>FOR ANY HELP, YOU MAY CALL US AT <br /> 1800-267-4444</h5>
            <h6>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</h6>

           </div>
        </div>

        <div className='footer2'>
            <div>
            <h3 style={{fontSize:"40px",fontWeight:"700",color:"white",marginTop:"-23px",marginBottom:"10px"}} className='logo' >Nykaa</h3>
                <p>Who are we?</p>
                <p>Careers</p>
                <p>Authenticity</p>
                <p>Press</p>
                <p>Testimonials</p>
                <p>Nykaa CSR</p>
                <p>Responsible Disclosure</p>
                <p>Investor Relations</p>
            </div>
            <div>
                <h3>Help</h3>
                <p>Contact Us</p>
                <p>Frequently asked questions</p>
                <p>Store Locator</p>
                <p>Cancellation & Return</p>
                <p>Shipping & Delivery</p>
                <p>Sell on Nykaa</p>
            </div>
            <div>
                <h3>Inspire Me</h3>
                <p>Beauty Book</p>
                <p>Nykaa TV</p>
                <p>Nykaa Network</p>
                <p>Nykaa Network</p>
            </div>
            <div>
                <h3>Quick Links</h3>
                <p>Offer Zone</p>
                <p>New Launches</p>
                <p>Nykaa Man</p>
                <p>Nykaa Fashion</p>
                <p>Nykaa Pro</p>
            </div>
            <div>
                <h3>Top Categories</h3>
                <p>Makeup</p>
                <p>Skin</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Appliances</p>
                <p>Mom and Baby</p>
                <p>Wellness</p>
                <p>Fragrance</p>
                <p>Natural</p>
                <p>Luxe</p>
            </div>

        </div>
          
          <div>
            <img src={footer} alt="" />
          </div>

          <div className='footer3'>
            <div>
                <p>Terms & Conditions</p>
                <p>Shipping Policy</p>
                <p>Cancellation Policy</p>
                <p>Privacy Policy</p>
            </div>
            <br />
            <p>© 2024 Nykaa MIHIR Pvt. Ltd. All Rights Reserved.</p>
          </div>
          {/* <div style={{width:"100%",height:"50px"}}>
            <p></p>
          </div> */}
    </DIV>
  )
}



const DIV = styled.div`


    
.footer1{
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 40px 100px 40px 100px;
    background-color: #3a4047;
    color: white;
    font-size: 14px;
}
.footer1 input{
    background:none;
    border-bottom: 2px solid white;
    margin-top: 10px;
    padding: 3px;

}
.footer1 input:focus{
    outline: none;
    
}
.footer1 input::placeholder{
    color:white ;
}
.footer1 button{
    border: 1px solid white;
    margin-left: 5px;
    padding: 5px 8px 5px 8px;
    border-radius: 2px;
    font-weight: 600;
    letter-spacing: 1px;
}
.footer1 p{
    font-size: 15px;
}

.footer1 img{
    width: 70%;
    margin-top: 10px;
}
.footer1 h6{
    margin-top: 10px;
}


.footer2{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    background-color: #8c8d94;
    padding: 50px 155px 50px 155px;
    color: white;
    
}
.footer2 p{
    margin-top: 10px;
    font-size: 12px;
}
.footer2 div h3{
    margin-bottom: 40px;
    
}
.logo{
    font-family: 'Dancing Script', cursive;
    font-family: 'Dancing Script', cursive;
    
    
}
.footer3{
background-color: #e80071;
font-size: 12px;
color: white;
text-align: center;
padding: 40px;
}
.footer3>div{
    display: flex;
    justify-content: center;
    gap: 20px;

}


`