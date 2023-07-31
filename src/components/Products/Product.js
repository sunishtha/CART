import React,{useEffect,useState} from 'react'
import Navbar from '../Navbar/Navbar'
import  './Product.css'
import { useProductContext } from '../../context/product-context'
import { sortAlgo } from '../../reducer/sort-product'
import { rangeFilter } from '../../reducer/range-filter'



const Product = () => {
    const [data,setData]=useState([]);
    const [search,setSearch]=useState('')
    const [addCart,setAddCart]=useState(false)
    const {sortby, priceRange ,
    dispatch} =useProductContext()
    
    const handleAddCart=(item,id)=>{
      
        setAddCart(!addCart)
    }

    useEffect(()=>{
      fetchData();
    },[])
    function fetchData(){
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setData(data))
    }

    const sortedData = sortAlgo(data, sortby);
      const rangeIt = rangeFilter(sortedData, priceRange);
    const handleClear= () => {
       
      };
      
   
  return (
    <div>
    <Navbar />
    <h3>Explore us!</h3>
    <div className='input'>
        <input onChange={(e)=>setSearch(e.target.value)}
       type='text' placeholder='Search here...'/>
    </div>
      
    <hr/>
    <div className='product-container'>
        <div className='product-filter'>
            <div className='product-filter-items'>
                <h3>Filters</h3>
                <button onClick={handleClear}>Clear</button>
            </div>
         <div className='product-filter-content'>
   


        <h4>Sort by : Price</h4>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
          />
          Price - low to high
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
          />
          Price - high to low
        </label>
     
      {/*  */}
   
        <label>
          <input
            type="range"
            min={100}
            max={1000}
            style={{ width: "100%", marginTop: "10px" }}
            value={priceRange}
            onChange={(e) =>
              dispatch({ type: "RANGE", payload: e.target.value })
            }
          />
          Filter by range 100-1000
        </label>
       
         </div>

        </div>
        <div className='product-items'>
            {rangeIt 
          ?.filter((item) => item?.title?.toLowerCase()?.includes(search))
          .map((item,id) => {
                return (
                    <div 
                    className='product-items-list' key={id}>
                        <img src={item.image} alt='..'/>
                        <h5>{item.title}</h5> 
                        <p>$ {item.price}</p>
                        { !addCart ?
                        <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>Add to Cart</button>:
                        <button>Added to Cart</button>}
                    </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Product
