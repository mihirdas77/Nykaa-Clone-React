import React from 'react'
import { useNavigate } from 'react-router-dom'

export const PageUnmatched = () => {
    const navigate = useNavigate()
  return (
    <div style={{display:"grid",margin:"auto",placeItems:"center"}}>
         <h1 style={{fontSize:"50px",textAlign:"center",opacity:"0.7",marginTop:"100px"}}>Sorry! Page Not Found </h1>
        <button style={{width:"200px",textAlign:"center",backgroundColor:"#fc2779",borderRadius:"10px",padding:"10px",marginTop:"50px"}} onClick={()=>navigate('/')}>Go To HomePage</button>
    </div>
  )
}
