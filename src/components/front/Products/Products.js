import React from 'react';
import '../Products/Products.css';
function Products({productList,handleAddProduct}) {
    console.log(productList);
  return (
    <div className="products">
        {
         productList.map((item)=>{
            return(
                <div className="card">
                    <div >
                        <img className="product-image" src={item.image} alt={item.image}/>
                       
                    </div>
                    <div className="product-name">
                    <h3>{item.name}</h3>
                    </div>
                    <div className="product-price">${item.price}</div>
                    <div>
                        <button className="product-add-button" onClick={()=>handleAddProduct(item)}>Add To Cart</button>
                    </div>
                </div>
            )
        })}
      
    </div>
  )
}

export default Products