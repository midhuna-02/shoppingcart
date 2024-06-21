import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Signup from '../Signup/Signup';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

function Routers({productList,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) {
   console.log(productList)
  
  return (
    <div>
        
        <Routes>
    <Route path='/' element={<Products productList={productList} handleAddProduct={handleAddProduct} />} />
    <Route path='/shoppingcart' element={<Products productList={productList} handleAddProduct={handleAddProduct} />} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}/>
      
</Routes>


    </div>
  )
}

export default Routers