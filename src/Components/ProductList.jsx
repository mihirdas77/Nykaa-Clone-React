import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";


export const ProductList = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const product = useSelector(store => store.productReducer.product)
   console.log(product)

//   let obj = {
//     params:{
//       category:searchParams.getAll("category"),
//       type:searchParams.getAll("type"),
//       _sort:searchParams.get("order") && "price",
//       _order: searchParams.get("order")
//     }
//   }
  
  
  
  useEffect(()=>{
  dispatch(getProduct())
  },[searchParams])


  return (
    <DIV>
      <div className="product" data-testid="product-list">
         {
          product?.map((el)=>
          <ProductCard key={el._id} {...el} />
          )
         }
      </div>
    </DIV>
  );
};

const DIV = styled.div`
    .product{
       display: grid;
       grid-template-columns: repeat(3, 1fr);
    }
`
