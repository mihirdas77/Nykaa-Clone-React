import axios from "axios"
import { PRODUCT_REQUEST_FAILURE, PRODUCT_REQUEST_PENDING, PRODUCT_REQUEST_SUCCESS } from "./actionTypes"

export const getProduct =(sortField,sortOrder)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST_PENDING})
    
    axios.get(`https://lumina-backend.onrender.com/product/getProducts?sortField=${sortField}&sortOrder=${sortOrder}`).then((res)=>{
      dispatch({type:PRODUCT_REQUEST_SUCCESS, payload:res.data})
     
      }).catch((err)=>{
      dispatch({type:PRODUCT_REQUEST_FAILURE})
    })
    
  }
 