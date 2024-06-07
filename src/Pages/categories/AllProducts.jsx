import styled from '@emotion/styled'




import { getProduct } from '../../Redux/ProductReducer/action'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProductCard } from '../../Components/ProductCard'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { Facecare } from './Facecare'
import { Hair } from './Hair'
import { Makeup } from './Makeup'
import { setUserNavbar } from '../../Redux/AuthReducer/action'

export const AllProducts = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const product = useSelector(store => store.productReducer.product)
  const [hair, setHair] = useState(false)
  const [face, setFace] = useState(false)
  const [makeup, setMakeUp] = useState(false)
  



  const [sortField, setSortField] = useState("")
  const [sortOrder, setSortOrder] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  const [selectedBrands, setSelectedBrands] = useState([]);

  
  const [facePage, setFacePage] = useState(1)
  const itemsPerPage = 24;



  useEffect(() => {
    dispatch(getProduct(sortField, sortOrder))



  }, [searchParams, sortField, sortOrder])


  



 




  const handleOptionChange = (event) => {


    setSortOrder(event.target.value);
    setSortField("price")

    
  };






  //...........................

  const handleBrandCheckboxChange = (event) => {
    const brandName = event.target.value;
    if (event.target.checked) {
      setSelectedBrands([...selectedBrands, brandName]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    }
   
    setFacePage(1)
  };



  //pagination


  const indexOfLastFaceItem = facePage * itemsPerPage;
  const indexOfFirstFaceItem = indexOfLastFaceItem - itemsPerPage;
  const currentFaceItems = product
    .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    .slice(indexOfFirstFaceItem, indexOfLastFaceItem);


const handleMakeUp = ()=>{
   setMakeUp(true)
   setFace(false)
   setHair(false)
   dispatch(setUserNavbar(false))
}

const handleFace = ()=>{
  setMakeUp(false)
  setFace(true)
  setHair(false)
  dispatch(setUserNavbar(false))
}
const handleHair = ()=>{
  setMakeUp(false)
  setFace(false)
  setHair(true)
  dispatch(setUserNavbar(false))
}


  return (
    <DIV>
      <Navbar />
      
      <div id='lowerNav' >
                    <button onClick={handleMakeUp} >Makeup</button>
                    <button onClick={handleFace}>Face care</button>
                    <button onClick={handleHair}>Hair</button>
                    <button>Appliances</button>
                    <button>Bath & Body</button>
                    <button>Natural</button>
                    <button>Mom & Baby</button>
                    <button>Health & Wellness</button>
                    <button>Men</button>
                    <button>Fragrance</button>
      </div>
      {
        face?<Facecare />:hair? <Hair />:makeup?<Makeup />:
        <div>
          <div className='container'>
        <h1>Choose Whatever You Like</h1>
        <p>Discover a limitless range of Products</p>

      </div>
      <div className='box'>
        <div>
          <div className='category'>
            <h1>Sort By :</h1>
            <label>
              <input
                type="radio"
                name="options"
                value="asc"
                className='white-checkbox'
                checked={sortOrder === 'asc'}
                onChange={handleOptionChange}
              />
              Price : Low to High
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="options"
                value="desc"
                className='white-checkbox'
                checked={sortOrder === 'desc'}
                onChange={handleOptionChange}
              />
              Price : High to Low
            </label>

          </div>


          <div className='category2'>
            <h1>Select Any Brand</h1>
            
            <label><input className='white-checkbox' type="checkbox" value="mamaearth"
              onChange={handleBrandCheckboxChange} />Mamaearth</label>
            <br />
            
            <label><input className='white-checkbox' type="checkbox" value="mcaffeine"
              onChange={handleBrandCheckboxChange} />MCaffeine</label>
            <br />
            <label><input className='white-checkbox' type="checkbox" value="biotique"
              onChange={handleBrandCheckboxChange} />Biotique</label>
              <br />
            <label><input className='white-checkbox' type="checkbox" value="wow"
              onChange={handleBrandCheckboxChange} />WOW</label>
            <br />
            <label><input className='white-checkbox' type="checkbox" value="loreal"
              onChange={handleBrandCheckboxChange} />L'Oreal Paris</label>
            <br />
            <label><input className='white-checkbox' type="checkbox" value="dove"
              onChange={handleBrandCheckboxChange} />Dove</label>
            <br />
           
              <label><input className='white-checkbox' type="checkbox" value="myglamm"
            onChange={handleBrandCheckboxChange} />MyGlamm</label>
            <br />
            <label><input className='white-checkbox' type="checkbox" value="maybelline"
            onChange={handleBrandCheckboxChange} />Maybelline New York</label>
            <br />
            <label><input className='white-checkbox' type="checkbox" value="swissbeauty"
            onChange={handleBrandCheckboxChange} />Swiss Beauty</label>
            <br />
            <label><input className='white-checkbox' type="checkbox" value="mac"
            onChange={handleBrandCheckboxChange} />M.A.C</label>
            <br />
            <label><input className='white-checkbox' type="checkbox" value="lakme"
            onChange={handleBrandCheckboxChange} />Lakme</label>
            
          </div>

        </div>

        <div className="product" >



          {
            product
                    .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
                    .map((el) => <ProductCard key={el._id} {...el} />)
                    .slice(indexOfFirstFaceItem, indexOfLastFaceItem)
          }




        </div>

      </div>

      



      
        <div className="pagination">
          <button onClick={() => setFacePage(facePage - 1)} disabled={facePage === 1}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <span>{facePage}</span>
          <button
            onClick={() => setFacePage(facePage + 1)}
            disabled={currentFaceItems.length < itemsPerPage}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      
        </div>

        
      }
      
      <Footer />
    </DIV>
  )
}

const DIV = styled.div`
  
    .container{
        padding: 40px;
        width: 100%;
    }
    .Facecare{
        display: flex;
        justify-content: left;
        gap: 20px;
        padding-top: 20px;
        padding-left: 20px;
    }
    .Facecare img{
        width: 10%;
        transition: transform 0.2s;

    }
    .Facecare img:active{
        
        transform: scale(1.2);
    }

    .container h1{
        font-size: 30px;
        font-weight: 600;
        padding-left: 27px;
        opacity: 0.8;
    }
    .container p{
        padding-left: 27px;
        opacity: 0.6;
    }
    .category{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        margin: 20px;
        width: 300px;
        height: 150px;
        align-items: center;
        align-content: center;
        text-align: center;
        padding: 10px;
        margin-left: 60px;
        position: relative;
        text-align: left;
}
.category2{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        margin: 20px;
        width: 300px;
        height: 320px;
        align-items: center;
        align-content: center;
        text-align: center;
        padding: 10px;
        margin-left: 60px;
        position: relative;
        text-align: left;
}
label{
  /* margin-right: 200px; */
  text-align: left;
}
.category h1{
    font-size: 17px;
    text-align: center;
    padding: 10px;
    font-weight: 600;
    opacity: 0.9;
}
.category2 h1{
    font-size: 17px;
    text-align: center;
    padding: 10px;
    font-weight: 600;
    opacity: 0.9;
}


    .white-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid #d6dade; /* Set the border color */
  background-color: #e6e9ec; //
  border-radius: 50%;
  outline: none;
  position: absolute;
  cursor: pointer;
  right: 10px;
  margin-top: 3px;
  
}
.white-checkbox:checked {
  background-color: #e80071;
  border: none;
  
  
}
.box{
    display: flex;
}

.product{
    display: grid;
    grid-template-columns: repeat(3,1fr);
}

.pagination{
    text-align: center;
    padding: 50px;
    margin-left: 360px;
}
.pagination button{
    background-color: white;
    width: 45px;
    height: 45px;
    color: #e80071;
    font-weight: 600;
    font-size: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 50%;
}
.pagination span{
    
    width: 50px;
    height: 50px;
    color:#e80071 ;
    font-weight: 600;
    font-size: 17px;
    
    border-radius: 50%;
    
    margin: 0px 10px 0px 10px;
}

#lowerNav button{
    
    color: #72717f;
    font-size: 14px;
    margin-right: 50px;
    
    
}
#lowerNav button:hover{
    color: #fc2779;
}
#lowerNav{
    
    text-align: center;
    background-color: white;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    
   
    
    
}
`