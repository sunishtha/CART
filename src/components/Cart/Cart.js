import React,{useState,useEffect} from 'react'
import './Cart.css'
import Navbar from '../Navbar/Navbar'
import {useProductContext} from '../../context/product-context'
import {MdDeleteOutline} from 'react-icons/md'

const Cart = () => {
  const [total,setTotal]=useState(0)
const {cart,dispatch}=useProductContext();
  const totalPrice=()=>{
    let price=0;
    cart.map((e,k)=>{
      price=e.price+price
    })
    setTotal(price)
  }
useEffect(()=>{
   totalPrice()
},{totalPrice})
  
  return (
    <div>
        <Navbar />
     <h2>Cart({cart.length})</h2>
     <div className='cart-container'>
       <div className='cart-items'>
                       {
                        cart.map((item,id)=>{
                          return (
                            <div key={id}className='cart-items-list' >
                               <img src={item.image} alt='..'/>
                        <h5>{item.title}</h5> 
                        <p>$ {item.price}</p>
                        <button>-</button>
                        <p>qty:{item.quantity}</p>
                        <button>+</button>

                        <MdDeleteOutline 
                        onClick={()=>dispatch({type:'DEL_ITEM',payload:id})}
                        color='red' />
                              </div>
                          )
                        })
                       }
       </div>
       <div className='cart-total'>
       <p>$ price </p> 
       <p>$ discount</p>
       <h4>$ total : {total.toFixed(2)}</h4>
       <button>Placr Order</button>
       </div>

     </div>
    </div>
  )
}

export default Cart
