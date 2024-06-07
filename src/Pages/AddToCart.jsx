// AddToCartPage.js
import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart ,decreaseQuantity,addToCart} from '../Redux/CartReducer/action';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import empty from "../Images/empty.png"
import { useNavigate } from 'react-router-dom';


export const AddToCart = () => {
  // Use the useSelector hook to access the cart items from the Redux store
  const cartItems = useSelector((state) => state.cartReducer.items);
  const dispatch = useDispatch()
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate()

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  

  const calculateTotalQuantity = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const totalQuantity = calculateTotalQuantity();


  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cartItems]);

  const handleRemoveFromCart = (itemId) => {
    // Dispatch the removeFromCart action with the itemId
    dispatch(removeFromCart(itemId));
    console.log(itemId)
  };


  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };


  const handleIncreaseQuantity = (itemId) => {
    
    const selectedItem = cartItems.find((item) => item._id === itemId);
    if (selectedItem) {
      dispatch(addToCart(selectedItem));
    }
  };


  


  return (
    <DIV>
      {/* <h2 className='upperPart'><FontAwesomeIcon onClick={()=>dShow = 'hidden'} style={{marginRight:"13px"}} icon={faArrowLeft} /> Bag</h2><p className='quantity'>{totalQuantity} items</p>
      <hr style={{height:"1px",backgroundColor:"grey",marginBottom:"20px"}} /> */}
      {cartItems.length === 0 ? (
        <div className='noitem'>
               <img src={empty} alt="" />
               <br />
               <h1>Your Shopping Bag is <br /> Empty</h1>
               
               <p>This feels too light! Go on, add all your <br /> favourites</p>
               
               <button onClick={()=>navigate('/allproducts')}>Start Shopping</button>
        </div>
      ) : (
        <div className='cart'>
          {cartItems.map((item) => (
            <div key={item._id}>
              <div className='flex'>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <button className='remove' onClick={() => handleRemoveFromCart(item._id)}><FontAwesomeIcon icon={faTrash} /></button>
              </div>
              <br />
              
              
              <div className='below'>
                 <div className='quantity1'>
                   <p>Quantity: </p>
                    <button className='inc' onClick={() => handleDecreaseQuantity(item._id)}>-</button>
                    <p style={{fontSize:"18px",color:"#fc2779"}}>{item.quantity}</p>
                    <button className='inc' onClick={() => handleIncreaseQuantity(item._id)}>+</button>
                  </div>
                  
                
                
                <p>Price: <FontAwesomeIcon style={{fontSize:"12px"}} icon={faIndianRupeeSign} />{item.price*item.quantity}</p>
                
                
                
              </div>
              
              <hr />
              <br />
            </div>
            
          ))}
          
        </div>
      )}

      {
        cartItems.length!==0
        && <div className='details'>
        <h1>Price Details</h1>
        <div>
          <p>Bag MRP ({totalQuantity} items)</p>
          <p><FontAwesomeIcon style={{fontSize:"12px"}} icon={faIndianRupeeSign} />{totalPrice}</p>
        </div>
        <div>
          <p>Bag Discount</p>
          <p><FontAwesomeIcon style={{fontSize:"12px"}} icon={faIndianRupeeSign} />99</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div>
          <h1 style={{marginLeft:"-10px",fontSize:"17px"}}>You Pay</h1>
          <h1 style={{fontSize:"17px"}}><FontAwesomeIcon style={{fontSize:"15px"}} icon={faIndianRupeeSign} />{totalPrice-99}</h1>
        </div>
      </div>

      }

   {  
cartItems.length!==0
        &&

      <div className='place'>
        <div>
        <h1 style={{fontSize:"17px"}}><FontAwesomeIcon style={{fontSize:"15px"}} icon={faIndianRupeeSign} />{totalPrice-99}</h1>
        <p>Grand Total</p>
        </div>
        <div>
          <button onClick={()=>navigate('/address')}>Proceed<FontAwesomeIcon style={{marginLeft:"40px",fontWeight: '700'}} icon={faArrowRight} /></button>
        </div>
      </div>
}
      
    </DIV>
  );
};


const DIV = styled.div`
  
.upperPart{
  font-size: 20px;
  display: inline;
  
  
  
  
}
.quantity{
  display: inline;
  margin-left: 20px;
  opacity: 0.7;
}
.cart{
  border: 2px solid pink;
  border-radius: 10px;
  width: 320px;
  /* padding: 20px; */
  
  /* width: 300px; */
}
.cart img{
  
  width: 90px;
  height: 90px;
}
.flex{
  display: flex;
  justify-content: space-between;
  gap: 10px;
  /* border: 0.1px solid grey; */
  padding: 10px;

}
.flex h3{
  line-height: 16px;
  /* opacity: 0.9; */
  color: #393939;
  font-weight: 400;
}
.remove{
  margin-top: -65px;
  font-size:20px;
  opacity: 0.7;
}
.below{
  display: flex;
  justify-content: space-between;
  margin-top: -40px;
  padding: 10px;
  
}
.inc{
 
 font-size: 18px;
 margin: 0px 5px 0px 5px;
}

.quantity1 p{
  display: inline;
  color: #343434;
  font-weight: 500;
  font-size: 16px;
}
.details{
  width: 320px;
  height: 230px;
  border: 2px solid pink;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
}
.details div{
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
}
.details>h1{
  font-size: 17px;
}

.details p{
  font-weight: 500;
  color: #343434;
  font-size: 13px;
}

.place{
  display: flex;
  justify-content: space-between;
  // padding: 7px;
  padding-bottom: 80px;
  
  position: sticky;
  bottom: 0;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 0px 0px inset;
  // margin: 20px -20px 0px -20px;
  background-color: white;
  
}
.place p{
  font-weight: 400;
  opacity: 0.8;
  margin-top: -20px;
}
.place button{
  padding: 5px 30px 5px 30px;
  background-color: #e80071;
  font-size: 16px;
  color: white;
  font-weight: 700;
  border-radius: 10px;
  
}
.place button:active{
  background-color: #c2035f;
  font-size: 17px;
  padding: 6px 31px 6px 31px;
}

.noitem{
      margin: auto;
      text-align: center;
      
      width: 300px;
      line-height: 23px;
      height: 500px;
      
    }
    .noitem h1{
      font-size: 20px;
      margin-bottom: 10px;
    }
    .noitem p{
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 5px;
    }
.noitem button{
  padding: 15px 50px 15px 50px;
  background-color: #e80071;
  color: white;
  font-weight: 700;
  border-radius: 8px;
  font-size: 15px;
}


`



