import React from 'react';
import './Cart.css';
const Cart = ({cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {
    const totalPrice=cartItems.reduce((price,item)=>price + item.quantity*item.price,0)
  return (
   <div className="cart-items">
    <h2 className="cart-items-header">CartItems</h2>
    <div className="cart-clearance">
            {cartItems.length>=1 &&(
 <button className='clear-cart-btn' onClick={handleCartClearance}>Clear Cart</button>
            )}
           
        </div>
    {cartItems.length===0 &&
    (<div className='cart-item-empty'>Cart is empty</div>) 
    }
    <div>
       
        {cartItems.map((item,index)=>{
            return(
                <div className="cart-items-list">
                    <img className="cart-item-image"key={index} src={item.image} alt={item.image} />
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-functions">
                        <button className='add-cart-product' onClick={()=>handleAddProduct(item)} >+</button>
                        <button className='remove-cart-product' onClick={()=>handleRemoveProduct(item)}>-</button>
                    </div>
                    <div className="cart-item-price">
                        {item.quantity} * ${item.price}
                    </div>

                </div>
                
            )
        })}
           
                
            
            
        
    </div>
    <div className="cart-items-total-price-name">
        Total Price:
        <div className="cart-items-total-price">${totalPrice}</div>
    </div>
   </div>
  

  )
}

export default Cart