import React from 'react'
import { PRODUCT_REQUEST_FAILURE, PRODUCT_REQUEST_PENDING, PRODUCT_REQUEST_SUCCESS } from './actionTypes'


const initialState = {
    isLoading: false,
    isError: false,
    product: [],
  }



export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case PRODUCT_REQUEST_PENDING :
            return {...state, isLoading:true}
        case PRODUCT_REQUEST_SUCCESS :
            return {...state, isLoading:false,isError:false,product:payload}
        case PRODUCT_REQUEST_FAILURE:
            return {...state, isLoading:false, isError:true}

        default:
            return state;
    }
  return (
    <div>
        
    </div>
  )
}