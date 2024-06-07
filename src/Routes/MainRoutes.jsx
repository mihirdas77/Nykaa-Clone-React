import React from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import { Home } from '../Pages/Home'
import { Hair } from '../Pages/categories/Hair'
import { Makeup } from '../Pages/categories/Makeup'
import { Facecare } from '../Pages/categories/Facecare'
import { Login } from '../Pages/Login'
import { AllProducts } from '../Pages/categories/AllProducts'
import { Payment } from '../Pages/Payment'
import { AddressPage } from '../Pages/AddressPage'
import { useSelector } from 'react-redux'

import { PageUnmatched } from '../Pages/PageUnmatched'
import { OrderConfirmation } from '../Pages/OrderConfirmation'


export const MainRoutes = () => {
  const cartItems = useSelector((state) => state.cartReducer.items);
 const navigate = useNavigate()
  return (

    <Routes>
      
      <Route path='*' element={<PageUnmatched />} />
      <Route path='/' element={<Home />} />
      <Route path='/haircare' element={<Hair />} />
      <Route path='/makeup' element={<Makeup />} />
      <Route path='/facecare' element={<Facecare />} />
      <Route path='/login' element={<Login />} />
      <Route path='/allproducts' element={<AllProducts />} />
      {
        cartItems.length && <Route path='/payment' element={<Payment />} />
      }
      
      <Route path='/address' element={<AddressPage />} />
      <Route path='/orderconfirmation' element={<OrderConfirmation />} />
      

    </Routes>
  )
}

