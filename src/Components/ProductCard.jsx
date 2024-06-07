import styled from "@emotion/styled"
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartReducer/action';
import { useTimeout } from "@chakra-ui/react";






export const ProductCard = ({_id,image,name,price,brand,category,type})=>{
  const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);
    
    const [loggedIn, setLoggedIn] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false)
    const handleHover = () => {
        setIsHovered(true);
      };
    
      const handleLeave = () => {
        setIsHovered(false);
        setTimeout(() => {
          setAddedToCart(false)
        }, 2000);
      };

      const handleAddToCart = () => {
        dispatch(addToCart({_id,image,name,price,brand,category,type}));
        setLoggedIn(false)
        setAddedToCart(true)
      };
 
      

    
      
      
    return (
        <DIV 
        onMouseLeave={handleLeave}
        onMouseEnter={handleHover}
        >
                <div key={_id} 
             
              className="product-card">
                <img className="product-image" src={image} alt="" />
           <h3 className="product-name">{name}</h3>
           <h3 className="product-price"><span style={{opacity:"0.5"}}>MRP:</span> <FontAwesomeIcon style={{fontSize:"14.5px",opacity:"0.7"}} icon={faIndianRupeeSign} /> {price}</h3>
           {/* {
            isHovered && loggedIn? <div  className="addtocart"><FontAwesomeIcon icon={farHeart} beat style={{padding:"22px",color:"#e80071",fontWeight:"regular"}} /><button onClick={handleAddToCart} >Add to Bag</button></div>: <button className="addedtocart">Added to Cart</button>
           } */}
          {
            isHovered && addedToCart?
        <div className="addedtocart">
            <button >Added to Bag</button>
          </div>
          : isHovered &&
          <div className="addtocart">
            <FontAwesomeIcon icon={farHeart} beat style={{padding: "22px", color: "#e80071", fontWeight: "regular"}} />
            <button onClick={handleAddToCart}>Add to Bag</button> 
          </div>
}




                </div>
           
           
        </DIV>
    )
}

const DIV = styled.div`
     
    
        /* .product-card{ */
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 5px;
        width: 300px;
        height: 493px;
        /* margin-left: 30px; */
        padding: 20px;
        text-align: center;
        position: relative;
        margin: 20px;
        /* } */
        
        
        h3{
            padding: 10px;
        }
        img{
            padding: 10px;
        }
     
       .addtocart{
        display: flex;
        
        margin-left: -20px;
        margin-right: -20px;
        position: absolute;
        top: 433px;
       }
       .addtocart button{
        background-color: #e80071;
        padding: 10px 75px 10px 75px;
        
        color: white;
        font-weight: 600;
       }
       .addtocart button:hover{
        background-color: #a10450;
       }
       .addtocart button:active{
        font-size: 17px;
       }


       .addedtocart{
        /* display: flex; */
        
        margin-left: -20px;
        margin-right: -20px;
        position: absolute;
        top: 433px;
        width: 300px;
        border: 2px solid red;
        
       }
       .addedtocart button{
        background-color: #e80071;
        padding: 16px 75px 16px 80px;
        width: 100%;
        color: white;
        font-weight: 600;
        transition: 0.5s;
       }


`