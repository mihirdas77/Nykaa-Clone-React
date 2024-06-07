// src/components/SignUpWithOtp.js
import React, { useState, useRef,useEffect } from 'react';
import firebase from './firebaseConfig';
import 'firebase/compat/auth';
import styled from '@emotion/styled';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogin } from '../Redux/AuthReducer/action';

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [message, setMessage] = useState('');
  // const [code , setCode] = useState('')
  // const [mobileNumber, setMobileNumber] = useState('')
  const recaptchaVerifierRef = useRef(null);
  const navigate = useNavigate();
  const [login, setLogin] = useState(false)
  const [greet, setGreet] = useState('')
  const [redirect, setRedirect] = useState('')
  const dispatch = useDispatch()
  

 
  


  useEffect( ()=>{
    const fetchData = async ()=>{
      if(login){
        try {
          const response = await axios.post('https://lumina-backend.onrender.com/users/register', {
            
            number: phoneNumber
          })
         
          if(response.data.data){
            setGreet('Welcome back to Nykaa ')
            
            
          }else{
            setGreet('Welcome to Nykaa')
            
          }
        }catch (error) {
            setMessage('Error registering user');
          }
        
        }
    }
    
    fetchData()
   
  },[message])


  useEffect(() => {
    
    recaptchaVerifierRef.current = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible', 
    });
  }, []);

  const handleSendOtp = async () => {
    // const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    const recaptchaVerifier = recaptchaVerifierRef.current;
  
    // if(message == 'Please Enter the OTP sent to your phone number')
    

    

    
    firebase.auth().signInWithPhoneNumber(phoneNumber,recaptchaVerifier)
      .then(confirmationResult => {
        setVerificationId(confirmationResult.verificationId);
        setMessage('Please Enter the OTP sent to your phone number');
        setLogin(true)
        setTimeout(() => {
          setLogin(false)
        }, 1000)
      })
      .catch(error => {
        setMessage(`Error : Enter the Correct Mobile Number `);
      });
  };

  const handleVerifyOtp = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);

    firebase.auth().signInWithCredential(credential)
      .then(userCredential => {
        const user = userCredential.user;
        setRedirect('Redirecting.....')
        setMessage(`${greet}`);
        dispatch(setUserLogin(true))
        setTimeout(() => {
          navigate(-1)
        }, 1500)
        
        // Now you can navigate to your logged-in page
      })
      .catch(error => {
        setMessage(`Error : Enter the Correct OTP `);
      });
  };

  const handlePhoneNumberChange =(value, country)=>{
  setPhoneNumber(`+${value}`)
  }

  return (
    <DIV>
      <div className='login'>
      <h2>LOGIN / REGISTER</h2>
      <PhoneInput
        style={{width:"140px",height:"50px",margin:"20px"}}
        inputStyle={{height:"50px", border: "1px solid #fc2779"}}
        inputClass="custom-phone-input"
        
        
        country={'in'}
        type="tel"
        
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        
        // onChange={e => setPhoneNumber(`${e.target.value}`)}

      />
      <button  onClick={handleSendOtp}>Send OTP</button>
      <input
      className='input'
        type="text"
        placeholder="Enter OTP"
        value={verificationCode}
        onChange={e => setVerificationCode(e.target.value)}
        style={{marginTop:"50px"}}
      />
      <button style={{paddingLeft:"50px",paddingRight:"50px"}} onClick={handleVerifyOtp}>PROCEED</button>
      <br />
      <br />
      <br />
      <div style={{opacity:"0.8",color:"#fc2779"}}>{message}</div>
      <br />
      <p>{redirect}</p>
      <br />
      <br />
      <p onClick={()=>navigate(-1)} style={{color:"#fc2779",cursor:"pointer"}}>Go Back</p>

      <div id="recaptcha-container"></div>
      </div>
      {/* <PhoneInput
        country={'india'} // Default country
        value={mobileNumber}
        onChange={handlePhoneNumberChange}
      /> */}
    </DIV>
  );
};


const DIV = styled.div`
width: 100%;
background-color: #f3f3f3;
height: 803px;
padding-top: 50px;
position: relative;

.login{
  
  width: 400px;
  height: 640px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  margin: auto;
  text-align: center;
  background-color: white;
  padding: 30px;
  

}
.login h2{
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 40px;
}

.login .input{
  
  background-color: white;
  border: 1px solid #fc2779;
  width: 300px;
  padding: 10px 20px 10px 20px;
  margin: 20px;
  height: 50px;
  border-radius:5px;

  
  
  
  
}
.custom-phone-input::placeholder {
  color: #999;
}
 
.login button{
    background-color: #e80071;
    color: white;
    padding: 10px 14px 10px 14px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
}
.login button:hover{
    background-color: #861c4d;
    transition:0.3s;
    
}
.login button:active{
   background-color: white;
   color: #e80071;
   
   
}
  
`

